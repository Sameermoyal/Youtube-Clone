export const API_KEY = 'AIzaSyDlQEiH_g-6Y9f63x6ZKRsCf2f6SvVErGk';

export const value_converter =(value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }else{
        return value;
    }
}