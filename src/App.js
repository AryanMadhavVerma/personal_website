import { Container } from 'postcss';
import {react, useEffect, useRef, useState} from 'react'
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';


import './App.css'


const App = () => {

  const workRef = useRef(null)
  const fitnessRef = useRef(null)
  const musicRef = useRef(null)
  const [theme, setTheme] = useState('light-theme')
  const [mode, setMode] = useState('light')
  const [dropDownToggle1, setDropDownToggle1] = useState(false)
  const [dropDownToggle2, setDropDownToggle2] = useState(false)
  const [dropDownToggle3, setDropDownToggle3] = useState(false)
  

  const toggleTheme = (mode) => {
    if(theme === 'light-theme') {
      setTheme('dark-theme')
      setMode(mode)
    } else {
      setTheme('light-theme')
      setMode(mode)
    }
  }
  
  const A = ({link, text}) => {
    return (
      <a href={link} className='underliner' target="_blank" rel="noopener noreferrer">{text}</a>
    )
  }

  useEffect( () => {
    document.body.className = theme
  }, [theme])



  return (
   <div className='home'>
      <div className='header px-10 py-2 sm:px-20 md:px-60'>
        <div className='logo'>
          <p className='text-base md:text-lg'><a href = '#' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>aryanmadhavverma</a></p>
        </div>
        <div>
          <div className='mt-2 '>
            <DarkModeToggle
              mode={mode}
              onClick={toggleTheme}
              dark=""
              light=""
              size="sm"
              inactiveTrackColor="#FCFCFC"
              inactiveTrackColorOnHover="#FCFCFC"
              inactiveTrackColorOnActive="#FCFCFC"
              activeTrackColor="#ff9400"
              activeTrackColorOnHover="#ff9400"
              activeTrackColorOnActive="#2C2C2C"
              inactiveThumbColor="#ff9400"
              activeThumbColor="#FCFCFC"
              onChange={toggleTheme}
            />
          </div>
        </div>
      </div>
      <div className='section px-10 pt-6 sm:px-20 md:px-60'>
        <h1 className='text-xl pb-1'>Hey there,</h1>
        <p className='text-base md:text-lg'>
         Welcome to my tiny corner of the internet. You can find me writing a little bit about myself, my <a href='#' className='highlight' onClick={() => workRef.current?.scrollIntoView({behavior: "smooth"})}>work experience</a>, my thoughts around <a href='#' className='highlight' onClick={() => fitnessRef.current?.scrollIntoView({behavior: "smooth"})}>fitness</a>, and my inclination towards <a href='#' className='highlight' onClick={() => musicRef.current?.scrollIntoView({behavior: "smooth"})}>music.</a> 
        </p>
        <div className='navlinks pt-4'>
          <ul className='navlinklist text-s'>
            <li><a href='#'>home</a></li>
            <li><a href='https://blog.aryanmadhavverma.com' target="_blank" rel="noopener noreferrer">blog</a></li>
            <li><a href='https://twitter.com/aryanmadhaverma' target="_blank" rel="noopener noreferrer">twitter</a></li>
            <li><a href='https://github.com/AryanMadhavVerma' target="_blank" rel="noopener noreferrer">github</a></li>
          </ul>


        </div>
        <hr className='mb-4 mt-2'></hr>
      </div>
      <div className='section px-10 pb-6 pt-2 sm:px-20 md:px-60'>
        <h2 className='text-xl pb-1'>About me</h2>
        <p className='text-base md:text-lg'>
            I’m Aryan, an engineering student at BITS Pilani. Pursuing my degree as a side hustle, my interests revolve around software systems, startups, human psychology and fitness.
            <br></br>
            <br></br>
            My technical inclinations are towards understanding large scale software systems, building web applications, and tinkering around with new technology.
            <br></br>
            <br></br>
            I'm also a wannabe fitness enthusiast wanting to compete in powerlifting one day. 
            <br></br>
            <br></br>
            In my free time, I listen to <a className='underliner' href='https://stoic.coffee/' target="_blank" rel="noopener noreferrer">Stoic Coffee Break</a>, watch TV Shows(I love Sci-Fi thrillers), listen/create music, and scroll through <a className='underliner' href='https://www.instagram.com/explore/tags/darkmemes/?hl=en' target="_blank" rel="noopener noreferrer">memes</a>.
            <br></br>
            <br ref = {workRef}></br>
            If you’re into psychological sci-fit thrillers, <a className='underliner' href='https://www.imdb.com/title/tt11280740/' target="_blank" rel="noopener noreferrer">Severance</a> and <a className='underliner' href='https://www.imdb.com/title/tt15758760/' target="_blank" rel="noopener noreferrer">Dr.Brain</a> are my recent favourites! 
        </p>
      </div>
      <div className='section px-10 py-4 sm:px-20 md:px-60'>
        <h2 className='text-xl pb-1'>Work</h2>
        <p className='text-base md:text-lg'>
            <p>Check my <a className='underliner' href='https://drive.google.com/file/d/1CRANggTtfHuqVyYT9F1PFwYwdjNIkY45/view?usp=sharing' target="_blank" rel="noopener noreferrer">resume</a> for detailed work experience. For my open-source contributions, head over to <a className='underliner' href='https://github.com/AryanMadhavVerma' target="_blank" rel="noopener noreferrer">github</a>.</p>
            <br></br>
            <p>Since first year, I've tasted multiple domains. From pursuing consulting in my initial years in college, to switching to product and growth to get more skin in the game, I learned a lot. 
              Working in b2b SaaS for more than year, I realized I want to go deeper into problems, which led me to transition into tech. Eventually, I became a full-stack developer building my own micro-SaaS tools. </p>
            <br></br>
        </p>
        <div className='flex items-center'>
            <p ref = {fitnessRef} className='text-base md:text-lg'>Past experience</p>
            <button onClick={() => setDropDownToggle1(dropDownToggl => !dropDownToggle1)}>
              {
                dropDownToggle1
                ? (
                  <div className='mx-2 highlight text-base md:text-lg'>collapse</div>
                )
                : (
                  <div className='mx-2 highlight text-base md:text-lg'>expand</div>
                )
              }
            </button>
        </div>
        <>
          {
            dropDownToggle1
            &&
          
              <div>
                  <div className='work-item pt-4'>
                  <p className='text-base md:text-lg font-light py-2'>For projects, <span className='subp px-2 font-normal'><a className='link highlight font-light' href='https://github.com/AryanMadhavVerma' target="_blank" rel="noopener noreferrer">checkout github</a></span></p>
                  </div>
                  <div className='work-item py-2'>
                  <p className='text-base md:text-lg font-bold py-2'>Houseware<span className='subp px-2 font-normal'>product & analytics eng</span></p>
                  <p className='text-base md:text-lg'>Houseware is an early stage b2b startup in the modern data ecosystem.  As a revenue analytics workbench, Houseware builds metric driven intelligent data apps for business users. I was responsible for leading and launching an open source initiative, <A text='Metrics by houseware' link = 'https://metrics.houseware.io'/>. Work involved shaping the product, writing <A link = 'https://github.com/HousewareHQ/dbt_facebook_ads_metrics' text = 'open source data packages'/> using dbt code, maintaining documentation and developing landing pages for the product.</p>
                  </div>
                  <div className='work-item py-2'>
                  <p className='text-base md:text-lg font-bold py-2'>Urjanet<span className='subp px-2 font-normal'>data</span></p>
                  <p className='text-base md:text-lg'><A link = 'https://urjanet.com' text = 'Urjanet'/> is a utility data management company I worked for a couple of months. Onboarded as a Data analyst, I was involved in analyzing raw customer data, writing scripts to automate feature engineering processes for the customer service team, and creating dashboards for stakeholder meetings.</p>
                  </div>
                  <div className='work-item py-2'>
                  <p className='text-base md:text-lg font-bold py-2'>Bitespeed<span className='subp px-2 font-normal'>product & growth</span></p>
                  <p className='text-base md:text-lg'><A link = 'https://www.bitespeed.co' text = 'Bitespeed'/> is a b2b SaaS startup in the e-commerce space. It was the first 0-1 journey I was a part of. My role as a product & growth generalist was managing customer success pipelines to establish a product-channel fit. I was also involved in designing user-interfaces for the product and analyzing customer behavior.</p>
                  </div>
              </div>
            
          }
        </>

        
       </div>
       <div className='section px-10 py-4 sm:px-20 md:px-60'>
        <h2 className='text-xl pb-1'>Fitness</h2>
        <p className='text-base md:text-lg'>
          Seeing how the body is capable of immense strength under stress got me interested in testing my physical limits. I’m still a beginner in this journey who has just scratched the surface. 
          <br></br>
          <br></br>    
          <div className='flex items-center'>
            <p ref={musicRef} >Workouts and current lifts</p>
            <button onClick={() => setDropDownToggle2(!dropDownToggle2)}>
              {
                dropDownToggle2
                ? (
                  <div className='mx-2 text-base md:text-lg highlight'>collapse</div>
                )
                : (
                  <div className='mx-2 text-base md:text-lg highlight'>expand</div>
                )
              }
            </button>
          </div>
        </p>
        <>
        {
          dropDownToggle2
          &&
          <div>
            <br></br>
            <p className='text-base md:text-lg'>I follow a hybrid approach while lifting weights. My routine is a mixture of strength and hypertrophy. For compound movements, I focus on how heavy I can lift, while for other movements I try maximizing the repetitions per set. I also throw in a couple of 5-k runs a month to keep my heart in check </p>
            <br></br>
            <p className='text-base md:text-lg'>My current stats (Dec 2022) vs goal stats (Dec 2023)</p>
          
            <div className='pt-2'>
                <table>
                    <tr className='text-base md:text-lg'>
                      <th>Lift</th>
                      <th>Current</th>
                      <th>Goal</th>
                    </tr>
                    <tr className='text-base md:text-lg'>
                      <td>weight</td>
                      <td>75kg</td>
                      <td>75kg</td>
                    </tr>
                    <tr className='text-base md:text-lg'>
                      <td>bench</td>
                      <td>75kg</td>
                      <td>120kg</td>
                    </tr>
                    <tr className='text-base md:text-lg'>
                      <td>squat</td>
                      <td>100kg</td>
                      <td>180kg</td>
                    </tr>
                    <tr className='text-base md:text-lg'>
                      <td>deadlift</td>
                      <td>145kg</td>
                      <td>200kg</td>
                    </tr>
                    <tr className='text-base md:text-lg'>
                      <td>5k</td>
                      <td>6"30 min/km</td>
                      <td>5"30 min/km</td>
                    </tr>
                </table>
          </div>
          </div>
}
      </>
      </div>
      <div className='section px-10 py-4 sm:px-20 md:px-60'>
        <h2 className='text-xl pb-2'>Music</h2>
        <p className='text-base md:text-lg'>
          Music has been a part of my life since childhood. I used to do gigs, go for competitions and sing in a choir during my high-school days. Its been half a decade since I’ve done any such activity.
          <br></br>
          <br></br>
          As an attempt to keep in touch with music, I post covers on <A link = 'https://www.instagram.com/art.amv/' text = 'art.amv'/> (Check it out!)
        </p>
     
      
          
         
            
      </div>
      <div className='section px-10 py-4 sm:px-20 md:px-60'>
        <h2 className='text-xl pb-2'>Connect</h2>
        <p className='text-base md:text-lg'>I'm always up for a good conversation. Dm me on <A link = 'https://twitter.com/aryanmadhaverma' text = 'twitter'/> or send me a <A link = 'mailto:amv190301@gmail.com?subject=Regarding the good conversation you were talking about&body=Write what you want to talk about' text = 'mail'/>.</p>
        
        <div className='float-left py-8'>
          <p className='text-xs subp'>Last updated @21-12-2022</p>
          <p className='text-xs subp'>Made with react, hosted on github pages</p>
        </div>
      </div>
     

   
   </div>
      
    

  )
}

export default App