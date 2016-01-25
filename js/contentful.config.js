var client = contentful.createClient({
	space: '1oq1lgnwupsh',
	accessToken: '9e202ccaa19212267e8a417356d41277c51ea827b2a1122c00f8f3ea0c25dfe3'
});

client.space().then(
	function(space) { console.log(space); },
	function(error) { console.error(error); }
	);