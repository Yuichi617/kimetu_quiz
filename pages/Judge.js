import Link from "next/link";
import Layout from '../components/Layout';
import { Component } from "react";

class Judge extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Layout>
                <div className="main-screen">
                    結果画面
               </div>
           </Layout>
        )
    }
}

export default Judge;