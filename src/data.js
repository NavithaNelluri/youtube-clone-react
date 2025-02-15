export const API_KEY = "AIzaSyCk8fMzlhK_63mSQN3Vb5fMiv1siY6jCNQ";   

export const value_converter = (value) => {
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else
    {
        return value;
    }
}