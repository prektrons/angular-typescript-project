var refToTheBodyContainer = document.getElementsByTagName("body")[0];
var allElementsInsideBody = refToTheBodyContainer.children;

for(var i = 0; i < allElementsInsideBody.length; i++)
{
    var element = allElementsInsideBody[i];
    if(element.tagName == "INPUT")
    {
        if(element.type == "button")
        {
            debugger;
            var ValueOfMyClick = element.dataset['myclick'];
            if(ValueOfMyClick!=undefined)
            {
                element.addEventListener('click', 
                                          window[ValueOfMyClick])
            }
            else
            {
                element.addEventListener('click',  
                    function(e){
                        debugger;
                        var url = e.target.dataset['url'];
                        localStorage.setItem("data",  
                                             e.target.dataset['state']);
                        history.pushState(null, "", url);
                        history.go(0);
                    })
            }
        }
    
    
    
    }
    else if(element.tagName == "H1")
    {
        debugger;
        var key = element.dataset['from'];
        var data = localStorage.getItem(key);
        element.innerHTML = data;
    }
}
