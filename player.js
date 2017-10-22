const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress_filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelector('.[data_skip]')
const ranges = player.querySelector('.player_slider')

togglePlay => {
	const method = video.paused ? 'play' : 'pause'
	video[method]()
}

updateButton => {
	const icon = this.paused ? '' : ''
	toggle.textContent = icon
}

video.addEventListener('click', togglePlay)
video.addEventListener('play', togglePlay)
video.addEventListener('pause', togglePlay)
toggle.addEventListener('click', togglePlay)
