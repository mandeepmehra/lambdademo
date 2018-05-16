console.log("lamba function called")

exports.handler = (event, context, callback) => {
    // TODO implement
    callback(null, fetchItems());
    
};

function fetchItems(){
    return ['Item1', 'Item2','Item3']
}
