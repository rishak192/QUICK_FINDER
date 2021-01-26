import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from "react-router-dom";
class Box6 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
                    product_name:"Loading.....",
                    product_type:"Loading.....",
                    status:"Loading..",
                    price:"Loading..",
                    seller_name:"",
                    seller_address:"",
                    product_id:"",
                    seller_id:"Loading..",
                    description:"Loading..",
                    search_input:""
                  };
        
                }
      static getDerivedStateFromProps(props,state){
        return {
            product_name:props.product_name,
            product_type:props.product_type,
            status:props.status,
            price:props.price,
            product_id:props.product_id,
            seller_name:props.seller_name,
            seller_address:props.seller_address,
            seller_id:props.seller_id,
            search_input:props.search_input}
        }
    
    render(){
        return (
            <>
            <div class="container m-2 p-3" style={{boxShadow:'0 5px 10px rgb(0,0,0,0.16)',height:'400px',padding:'0px',backgroundColor:'white'}}> 
            <div class="row">    
                <div class="col-lg-12"> 
                    <img style={{width:'60%',marginLeft:'20%',height:'100%'}}src="https://cdn.vox-cdn.com/thumbor/VxVwYQjX8YjyLFyBekkGbjXyyVI=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19288658/DSCF7161.jpg"></img>
                </div>
            </div>
            <div class="row">    
                <div class="col-lg-12">
                   <table style={{textAlign:'center',margin:'auto'}}>
                    <tr><td colspan='2' style={{fontWeight:'700',color:'#707070',fontSize:'20px'}}>{this.state.product_name}</td></tr>    
                    <tr><td colspan='2'  style={{fontWeight:'500',color:'#707070'}}>{this.state.product_type}</td></tr>    
                    <tr><td colspan='2'  style={{fontWeight:'400',color:'#707070'}}>{this.state.seller_id}</td></tr>    
                    <tr><td style={{fontWeight:'400',color:'#928D3D',fontWeight:'700',fontSize:'17px'}}>{this.state.price}</td><td style={{fontWeight:'400',color:'#2E7F8F',fontWeight:'600',fontSize:'17px'}}>{this.state.status}</td></tr>
                    <br />
                    <tr><td colspan ='2'><Link to="/Quick_finder/Boxopen1" class="btn" style={{backgroundColor:'#1C1A1A',color:'#FFF8F8',fontWeight:'700'}}>Explore</Link></td></tr>    

                  </table>
                </div>
            </div>
            </div>
            </>
        );
    }
}
export default Box6;