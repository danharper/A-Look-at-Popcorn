document.addEventListener("DOMContentLoaded", function() {

	var pop = Popcorn('#demo_video', { pauseOnLinkClicked: true });

	pop.tagthisperson({
		start: 1,
		target: 'tags',
		person: 'Dan Harper',
		image: 'img/danharper.jpg',
		href: 'http://danharper.me'
	});

	pop.image({
		start: 2,
		end: 10,
		target: 'side',
		href: 'http://net.tutsplus.com',
		src: 'img/nettuts.jpg'
	});

	pop.googlefeed({
		start: 4,
		end: 10,
		target: 'side',
		url: 'http://net.tutsplus.com/feed/'
	});

	pop.facebook({
		start: 8,
		end: 10,
		target: 'side',
		type: 'like',
		href: 'http://net.tutsplus.com'
	});

	pop.googlemap({
		start: 10,
		end: 12,
		target: 'side',
		type: 'ROADMAP',
		location: 'England',
		zoom: 6
		// type: 'STREETVIEW',
		// lat: 50.844537,
		// lng: -1.081544,
		// zoom: 2,
		// heading: 145,
		// pitch: 1
	});

	pop.tagthisperson({
		start: 12,
		target: 'tags',
		person: 'The Queen',
		image: 'img/queen-large.jpg',
		href: 'http://royal.gov.uk'
	});

	pop.image({
		start: 12,
		end: 14,
		target: 'side',
		src: 'img/queen-large.jpg'
	});

	pop.wikipedia({
		start: 12,
		end: 14,
		target: 'wiki',
		src: 'http://en.wikipedia.org/wiki/Elizabeth_II',
		title: 'The Queen',
		numberofwords: 40
	});

	pop.tagthisperson({
		start: 14,
		target: 'tags',
		person: 'Tea',
		image: 'img/cup-of-tea.jpg',
		href: 'http://en.wikipedia.org/wiki/Black_tea'
	});

	pop.image({
		start: 14,
		end: 16,
		target: 'side',
		href: 'http://en.wikipedia.org/wiki/Black_tea',
		src: 'img/cup-of-tea.jpg'
	});

	pop.webpage({
		start: 16,
		target: 'side',
		src: 'http://mozillapopcorn.org/'
	});

	pop.play();

}, false);
