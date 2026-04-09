import { motion } from "framer-motion";

export default function App() {
  return (
    <div style={{background: "#000", color: "#fff", minHeight: "100vh", padding: "20px", fontFamily: "sans-serif"}}>
      <section style={{textAlign: "center", padding: "60px 0"}}>
        <motion.h1 initial={{opacity:0,y:-40}} animate={{opacity:1,y:0}} style={{fontSize: "3rem"}}>
          Aelsie Jackson
        </motion.h1>
        <p>Gospel Artist • Worship Leader • Songwriter</p>
      </section>

      <section style={{textAlign:"center"}}>
        <h2>Listen & Watch</h2>
        <p>
          <a href="https://artists.spotify.com/c/artist/1uhka3UWKBu0czH88TVihY/home" target="_blank">Spotify</a> | 
          <a href="https://youtube.com/@aelsiejackson?si=iM-S6C8wCiIl732X" target="_blank"> YouTube</a>
        </p>
      </section>

      <section style={{textAlign:"center", marginTop:"40px"}}>
        <h2>Connect</h2>
        <p>
          <a href="https://www.instagram.com/aelsiejacksonofficial?igsh=MXJveDByNzh2ZGx0bQ==">Instagram</a> | 
          <a href="https://www.tiktok.com/@aelsiejackson1?_r=1&_t=ZS-95O4rQFmzB6"> TikTok</a>
        </p>
      </section>
    </div>
  );
}
