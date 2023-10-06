import "./App.css";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <div className="main">
        <div className="nav">
          <div className="nav-left">
            <div className="img">
              <img
                src="https://starsunfolded.com/wp-content/uploads/2017/12/K-K-Singer-2.jpg"
                alt="kk"
              />
            </div>
          </div>
          <div className="nav-right">
            <div className="brief">
              <h1>Krishnakumar Kunnath(KK)</h1>
              <h2>23 August 1968 - 31 May 2022</h2>
            </div>
          </div>
        </div>
        <h1
          style={{
            textAlign: "center",
            color: "whitesmoke",
            fontWeight: "bold",
            fontSize: "6rem",
          }}
        >
          <i>Indian playback singer</i>
        </h1>
        <div className="section">
          <h1>Early Life</h1>
          <p>
            Krishnakumar Kunnath, known professionally as KK, was an Indian
            singer who recorded songs in Hindi, Tamil, Telugu, Kannada,
            Malayalam, Marathi, Assamese, Bengali, and Gujarati. He was born on
            23 August 1968 in Delhi, India. His father, C.S. Kunnath, was a
            Malayali from Kerala, and his mother, Sulochana Kunnath, was a
            Punjabi. KK had two elder sisters.
          </p>
          <p>
            {" "}
            KK's family moved to Mumbai when he was a child. He studied at St.
            Joseph's Boys' High School, Mumbai, and then went on to study at
            Kirori Mal College, Delhi University. He graduated with a degree in
            commerce.
          </p>
        </div>

        <div className="section">
          <h1>Career</h1>
          <p>
            KK began his singing career in 1994 with the album "Pal". He
            achieved fame with the song "Tadap Tadap Ke Is Dil Se" from the film
            "Hum Dil De Chuke Sanam" (1999). He went on to sing many popular
            songs, including "Yaaron" (Fiza, 2000), "Aankhon Mein Teri" (Ghulam,
            1998), "Zindagi Do Pal Ki" (Kites, 2010), "Tu Hi Meri Shab Hai"
            (Gangster, 2006), and "Dil Ibaadat" (Tum Mile, 2009).
          </p>
          <p>
            KK also sang songs in many regional languages. His most popular
            Telugu songs include "Cheliya" (Magadheera, 2009), "Ninne Ninne"
            (Happy Days, 2007), and "Neetho Vastha" (Ashta Chamma, 2008). His
            most popular Tamil songs include "Appadi Podu" (96, 1996), "Enna
            Solla Porathey" (Majunu, 2001), and "O Podu" (Ghilli, 2004).
          </p>
          <p>
            KK was a versatile singer who could sing a variety of genres,
            including pop, rock, and classical. He was also known for his live
            performances. He performed at many concerts and festivals around the
            world.
          </p>
        </div>
        <div className="section">
          <h1>Discovery</h1>
          <h3>
            KK's discography includes over 20 albums and many singles. Some of
            his most popular albums include:
          </h3>
          <ul>
            <li>Pal (1994)</li>
            <li>Jesus Loves You (1996)</li>
            <li>Koi Kahe Kehta Rahe (1999)</li>
            <li>Koi Mil Gaya (2003)</li>
            <li>Pal 2 (2005)</li>
            <li>Close to You (2006)</li>
            <li>Humsafar (2008)</li>
            <li>Zindagi Do Pal Ki (2010)</li>
            <li>Fitoor (2013)</li>
            <li>Rock On 2 (2016)</li>
            <li>Humsafar II (2019)</li>
          </ul>
        </div>

        <div className="section">
          <h1>Awards and Honors</h1>
          <h3>
            KK won many awards and honors throughout his career. Some of his
            most notable awards include:
          </h3>
          <ul>
            <li>
              Filmfare Award for Best Male Playback Singer for "Tadap Tadap Ke
              Is Dil Se" (Hum Dil De Chuke Sanam, 1999)
            </li>
            <li>
              IIFA Award for Best Male Playback Singer for "Yaaron" (Fiza, 2000)
            </li>
            <li>
              Zee Cine Award for Best Male Playback Singer for "Yaaron" (Fiza,
              2000)
            </li>
            <li>
              MTV Video Music Award for Best Music Video India for "Pal" (Pal,
              1994)
            </li>
            <li>
              Global Indian Music Academy Award for Best Male Playback Singer
              for "Aankhon Mein Teri" (Ghulam, 1998)
            </li>
          </ul>
          <p>
            KK was a talented singer who made a significant contribution to
            Indian music. He was loved by fans all over the world for his
            soulful voice and his ability to connect with his audience through
            his music. He will be remembered as one of the greatest Indian
            singers of all time.
          </p>
        </div>
        <div className="section">
          <h1>Death</h1>
          <p>
            KK died on 31 May 2023 at the age of 54 after suffering a heart
            attack while performing at a concert in Kolkata, India. His death
            was a shock to the Indian music industry and to his fans all over
            the world.
          </p>
        </div>
        <div className="footer">
          <marquee
            behavior="scroll"
            width="60%"
            direction="left"
            height="100px"
            scrollamount="16"
          >
            <h1>We all miss You 💖 KK &copy; {new Date().getFullYear()}</h1>
          </marquee>
        </div>
      </div>
      <ScrollToTop smooth />
    </>
  );
}

export default App;
