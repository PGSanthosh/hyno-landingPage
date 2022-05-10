import './home.css';
const Home = () =>{
    return <section>
        <div className='main'>
            <div className='banner'>
                <div className='banner-left'>
                    <h1>Single Platform for all land services</h1>
                    <p>Creating a single digital platform on land connecting all the stakeholders around the world providing all land services pertaining to the land across the country at one’s doorsteps anywhere on the globe</p>
                </div>
                <div className='banner-right'>
                    <div className='banner-form'>
                        <form>
                            <div className='input_in'>
                                <input type='text' placeholder='First Name' />
                            </div>
                            <div className='input_in'>
                                <input type='text' placeholder='Last Name' />
                            </div>
                            <div className='input_in'>
                                <input type='email' placeholder='Email Address' />
                            </div>
                            <div className='input_in'>
                                <input type='text' placeholder='Mobile no.' />
                            </div>
                            <div className='input_in'>
                                <textarea placeholder='Enter your query'></textarea>
                            </div>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='features'>
                <h2>Our Features</h2>
                <div className='features-items'>
                    <div className='item'>
                        <div className='icon'>
                            <img src={require('./feature1.png')} alt=""/>
                        </div>
                        <div className='content'>
                            <h4>The Land Specialist</h4>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='icon'>
                            <img src={require('./feature1.png')}  alt=""/>
                        </div>
                        <div className='content'>
                            <h4>The Land Specialist</h4>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='icon'>
                            <img src={require('./feature1.png')}  alt=""/>
                        </div>
                        <div className='content'>
                            <h4>The Land Specialist</h4>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='icon'>
                            <img src={require('./feature1.png')}  alt=""/>
                        </div>
                        <div className='content'>
                            <h4>The Land Specialist</h4>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='icon'>
                            <img src={require('./feature1.png')}  alt=""/>
                        </div>
                        <div className='content'>
                            <h4>The Land Specialist</h4>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='icon'>
                            <img src={require('./feature1.png')}  alt=""/>
                        </div>
                        <div className='content'>
                            <h4>The Land Specialist</h4>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Home;