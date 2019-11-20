var review=" This movie was the best written, acted, visual effected, etc. movie."+
    "This movie was the best movie I have ever seen. I am a huge Christopher Nolan fan and this movie was his finest."+
    "Matthew McConaughey turned in his best performance of his lifetime."+
    "Anne Hathaway was an amazing supporting actress and compared to her performance in Les Miserables,"+
    "I have no idea how she didnt get an Oscar for this. The visual effects were more than just Oscar worthy."+
    "They were pioneering. I have never seen anything like it."+
    "One thing I would recommend is having a little previous knowledge about space."+
    "Not like Einstein stuff though.";
var header=document.createElement('header');

var div1=document.createElement('div');
div1.innerHTML='<a href="../page1/index.html">Search</a>';

var div2=document.createElement('div');
div2.innerHTML='<a href="">My Movies</a>';

var div3=document.createElement('div');
div3.innerHTML='Anton Ryzhkov';
div3.className='logo';

header.append(div1);
header.append(div2);
header.append(div3);


var main=document.createElement('main');
var capt=document.createElement('div');
capt.innerHTML="My Movies";
capt.className='caption';
var sort=document.createElement('div');
sort.className='sort';
sort.innerHTML='<a href="">by rating</a> <a href="">by date</a>';
main.append(capt)
main.append(sort);
main.append(createCard("img/Interstellar.jpg","Interstellar(2014)",5,"15.03.2016 14:15",review));

var footer=document.createElement('footer');
document.body.append(header);
document.body.append(main);
document.body.append(footer);

function createCard(imagePath,name,rating,date,review){
    var card=document.createElement('div');
    var info=document.createElement('div');
    var img=document.createElement('img');
    var title=document.createElement('div');
    var rat=document.createElement('div');
    var _date=document.createElement('div');
    var _review=document.createElement('div');
    
    img.src=imagePath;
    title.innerHTML='"'+name+'"';
    _date.innerHTML=date;
    _review.innerHTML=review + '<a href="">details</a>';

    card.className='card';
    title.className='title';
    _date.className='date';
    rat.className='rating';
    info.className='info';
    _review.className='review';

    rat.append(createRatingArea(rating));
    rat.append(_date);
    info.append(img);
    info.append(title);
    info.append(rat);
    card.append(info);
    card.append(_review);
    return card;
}

function createRatingArea(rating)
{
    var ratingArea=document.createElement('div');
    ratingArea.className='rating-area';
    for(var i=0;i<5;i++)
    {
        var input=document.createElement('input');
        var name="star-"+(5-i);
        input.type="radio";
        input.className=name;
        if(i===(5-rating))
            input.checked=true;
        ratingArea.append(input);
        var label=document.createElement('label');
        label.htmlFor=name;
        ratingArea.append(label);
    }
    return ratingArea;
}