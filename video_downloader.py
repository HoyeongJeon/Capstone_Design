from pytube import YouTube

def download_video(video_url):
    yt = YouTube(video_url)
    yt.streams.filter(adaptive=True, file_extension='mp4').first().download()

if __name__ == '__main__':
    video_url = '유튜브 동영상 URL'
    download_video(video_url)

