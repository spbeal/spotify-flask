from flask import Flask, request, url_for, session, redirect
from flask_cors import CORS
import spotipy
from spotipy.oauth2 import SpotifyOAuth
import os
import time

app = Flask(__name__)

app.config['SESSION_COOKIE_NAME'] ='spotify_session'
app.secret_key = os.getenv("SECRET_KEY")
TOKEN_INFO = 'token_info'

# TEST   TEST   Members API Route
# @app.route("/members")
# def members():
#     return {"members": ["Member1", "Member2", "Member3",]}


@app.route('/')
def login():
    AUTH_URL = "https://accounts.spotify.com/authorize?client_id=fe1e3de44a6448a1adb90f23b4aa80c2&response_type=code&redirect_uri=http://localhost:3000&scope=streaming user-read-email user-read-private user-library-read u\ser-library-modify user-read-playback-state user-modify-playback-state"
    auth_url = create_spotify_oauth().get_authorize_url()
    return redirect(auth_url)

# @app.route('/')
# def catch_all():
#     app.run(debug=True)

@app.route("/redirect")
def redirect_page():
    session.clear()
   # code = request.json("code")
    code = request.args.get("code")
    token_info = create_spotify_oauth().get_access_token(code)
    session[TOKEN_INFO] = token_info

    return redirect(url_for('save_discover_weekly', external=True))


@app.route('/save_discover_weekly')
def save_discover_weekly():
    try:
        token_info = get_token()
    except:
        print("User not logged in")
        return redirect('/')
    
    sp = spotipy.Spotify(auth=token_info['access_token'])
    discover_weekly_playlist_id = None
    current_playlists = sp.current_user_playlists()['items']
    saved_weekly_playlist_id = None
    user_id = sp.current_user()['id']


    for playlist in current_playlists:
        if playlist['name'] == 'Discover Weekly':
            discover_weekly_playlist_id = playlist['id']
        if playlist['name'] == 'Saved Weekly':
            saved_weekly_playlist_id = playlist['id']
        
    if not discover_weekly_playlist_id:
        return "Discovery Weekly playlist not found"
    
    if not saved_weekly_playlist_id:
        new_playlist = sp.user_playlist_create(user_id, "Saved Weekly", True)
        saved_weekly_playlist_id = new_playlist['id']

    discover_weekly_playlist = sp.playlist_items(discover_weekly_playlist_id)
    song_uris = []
    for song in discover_weekly_playlist['items']:
        song_uri = song['track']['uri']
        song_uris.append(song_uri)

    sp.user_playlist_add_tracks(user_id, saved_weekly_playlist_id, song_uris)

    return ('Discover weekly songs added successfully')


def create_spotify_oauth():
    return SpotifyOAuth(

        #client_id='fe1e3de44a6448a1adb90f23b4aa80c2', # my app
        #client_secret='eb97ebc610f849acb0afd4355c345662', # my app 
        client_id = os.getenv("CLIENT_ID"),
        client_secret = os.getenv("CLIENT_SECRET"),
        redirect_uri = url_for('redirect_page', _external=True),
        #scope='user-library-read playlist-modify-public playlist-modify-private'
        scope = 'playlist-modify-public playlist-modify-private playlist-read-private playlist-read-collaborative user-read-private user-read-email user-top-read user-library-read',
    )


# def get_songs_by_artist(token, artist_id):
#     url = f'https://api.spotify.com/v1/artists/{artist_id}/top-tracks?country=US'
    

def get_token():
    token_info = session.get(TOKEN_INFO, None)
    if not token_info:
        redirect(url_for('login', external=False))
    now = int(time.time())

    is_expired = token_info['expires_at'] - now < 60
    if (is_expired):
        spotify_oauth = create_spotify_oauth()
        token_info = spotify_oauth.refresh_access_token(token_info['refresh_token'])
    
    return token_info


app.run(debug=True)