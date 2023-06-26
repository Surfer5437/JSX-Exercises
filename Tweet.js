function Tweet({username, name, dateOfTweet, message}){
    return(
    <div className="App-header">
      <p><b>{username}</b> -{name}-</p>
      <p>{message}</p>
      <p>{dateOfTweet}</p>
    </div>
    )
}
    
