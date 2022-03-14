const BUY_CAKE = 'BUY_CAKE'

function buyCake(){
    return {
        type: BUY_CAKE  
    }
} 

//An action is object with type property
//An action creator is function that returns an action.