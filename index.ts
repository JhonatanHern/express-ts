import app from './App'

app.listen(80, (err) => {
	if (err) {
		return console.log(err)
	}
	return console.log('server is listening on port 80')
})