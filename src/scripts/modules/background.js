import { TimelineMax, TimelineLite, TweenLite, Linear } from 'gsap/all';

export function initBackground() {
  //const sky = document.querySelector('.sky');
  const allClouds = new TimelineLite();

  function initClouds() {
    //loop through creation of 10 clouds
    for (let i = 1; i <= 6; i++) {
      //dynamically create a cloud element
      const cloud = document.querySelector('.cloud--' + i);
      TweenLite.set(cloud, { left: -100, top: i * 40, opacity: 0 });
      const cloudTl = new TimelineMax({ repeat: -1 });
      //fade opacity to 1
      cloudTl
        .to(cloud, 0.5, { opacity: 1 })
        //move cloud across its container div with random duration. Start time = 0
        .to(cloud, 6 + Math.random() * 50, { left: '100%', ease: Linear.easeNone }, 0)
        //0.5 seconds before timeline ends start fading opacity to 0
        .to(cloud, 0.5, { opacity: 0 }, '-=0.5');
      //add this cloud's timeline to the allClouds timeline at a random start time.
      allClouds.add(cloudTl, Math.random() * 5);
    }
  }
  initClouds();
}
