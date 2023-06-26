
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
    <App name="Mr. B" />
    
    <App name="Mr. B" />
    <Tweet 
    username="theBuckler" 
    name="Mr. B" 
    dateOfTweet="12/05/1989"
    message="the date I was born"/>
    <Tweet username="surfer5437" 
    name="Brandon Livingstone" 
    dateOfTweet="1/09/1995"
    message="Go Chickens!!! Wooooooo-Hoooooo!"/>
    <Tweet username="chickenPoop" 
    name="Eggsecutioner" 
    dateOfTweet="05/06/2007"
    message="when the chickens won"/>
    <Person  
    name="Eggsecutioner" 
    age="15"/>
    <Person  
    name="Brandon" 
    age="33"
    hobbies={["running","biking","surfing","sex"]}/>
    <Person  
    name="Jill" 
    age="22"
    hobbies={["crochet","sucking Brandon's Dick"]}/>

</div>
);