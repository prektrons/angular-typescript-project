var bodyElement = (document.getElementsByTagName("body")[0]);
var allElements = bodyElement.children;

for(i=0;i<allElements.length; i++)
{
        var element = allElements[i];
        if(element.tagName == "IASYS")
        {
            var obj = new IASYS("MaheshP");
            var htmlUI = obj.render();

            bodyElement.removeChild(element);
            bodyElement.innerHTML = htmlUI;
            break;
        }
}