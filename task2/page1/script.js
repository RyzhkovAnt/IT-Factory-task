/*-----------CREATE HEADER------------*/
var header=document.createElement('header');
var div1=document.createElement('div');
div1.innerHTML='<a href="">Search</a>';

var div2=document.createElement('div');
div2.innerHTML='<a href="../page2/index.html">My Movies</a>';

var div3=document.createElement('div');
div3.innerHTML='Anton Ryzhkov';
div3.className='logo';
header.append(div1);
header.append(div2);
header.append(div3);
document.body.append(header);

/*------------CREATE MAIN-------------*/
var main=document.createElement('main');
        /*-----Create Comboox-----*/
var setting=document.createElement('div');
setting.className='setting';
setting.append(createSelect(["Format","Movies","TV-Show"]));
setting.append(createSelect(["Genre","Adventure","Horror","Action"]));
setting.append(createSelect(["Year","2002","2014","2017"]))

var search=document.createElement('div');
search.className='search';
search.innerHTML= '<input type="search" placeholder="Search movies..."><button class="search">Search</button>';
setting.append(search);


        /*-------Create Table-------*/
var table=document.createElement('table');
table.cellSpacing="0";
table.append(createTableHead([" ","Title","Format","Genre","Year","Rating"]));
table.append(createTableRow(["img/Interstellar.jpg","Interstellar","Movie","Adventure","2014","8.6"]));
table.append(createTableRow(["img/ResidentEvil.jpg","Resident Evil","Movie","Horror","2002","8.2"]));
table.append(createTableRow(["img/Dunkirk.jpg","Dunkirk","Movie","Action","2017","7.9"]));
table.append(createTableRow(["",". . .",". . . ",". . .",". . .",". . ."]));
main.append(setting);
main.append(table);
document.body.append(main);


var footer=document.createElement('footer');
document.body.append(footer);

function createOption(textOption){
   var option=document.createElement('option');
   option.innerHTML=textOption;
   return option;
}

function createSelect(optionsTexts){
    var select=document.createElement('select');
    var i=0;
    for(i=0;i<optionsTexts.length;i++)
        select.append(createOption(optionsTexts[i]));
    return select;   
}

function createTableHead(headers){
    var tr=document.createElement('tr');
    for(var i=0;i<headers.length;i++)
    {
        var th=document.createElement('th')
        th.innerHTML=headers[i];
        tr.append(th);
    }
    return tr;
}

function createTableRow(rowContent)
{
    var tr= document.createElement('tr')
    var td=document.createElement('td');
    td.append(createImg(rowContent[0]," "));
    tr.append(td);
    for(var i=1;i<rowContent.length;i++)
    {
        var td=document.createElement('td');
        td.innerHTML=rowContent[i];
        tr.append(td);
    }
    return tr;
}

function createImg(imgPath,alt)
{
    var img=document.createElement('img');
    img.src=imgPath;
    img.alt=alt;
    return img;
}