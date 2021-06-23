import { useContext } from "react";
import { ColorContext } from "./ColorContext";

function Home(){
    const colors = useContext(ColorContext);
    return <h1 style={{ color: colors }}>Home</h1>
}

export default Home;