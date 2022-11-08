import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <>
    <div className="home-container">
        <h1 className="home-title">OnlyJams.</h1>
        <h3>
        <Typewriter 
        onInit={(typewriter) => {
            typewriter
            .typeString("Welcome to OnlyJams, find some new tunes to groove out to.")
            .start();
        }} 
        />
        </h3>
    </div>
    </>
  )
}
