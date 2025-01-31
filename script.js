let description= document.createElement('DIV');
let description_p= document.createElement('DIV');
let present = document.createElement('DIV');
btn.style.width=btn.offsetHeight+'px';
let timerID = setInterval(pres, 5000);
let count_p=0;
let str='';
function pres(){
    let x=Math.floor(Math.random() * main.offsetWidth);
    let y=Math.floor(Math.random() * main.offsetHeight);
    present.classList='gift';
    present.style.left=x+'px';
    present.style.top=y+'px';
    body.insertBefore(present, header);
}
present.addEventListener('click', function(){
    present.remove();
    count_p++;
    if (count_p>=2 && count_p<=4){
        str=' раза';
    }
    else {
        str=' раз'
    }
    alert('Вы поймали новогодний подарок уже '+ count_p + str);
})
function description_def(){
    description.classList='description';
    description.firstElementChild.style.height=description.firstElementChild.offsetWidth+'px';
    description_p.remove();
    if (window.innerWidth<500){
        description.style.left=50+"px";
        description.style.top=100+'px';
    }
    else{
        description.style.height=gum.offsetHeight-main.offsetHeight*0.037+"px";
    }
}
function description_p_def(){
    description_p.classList='description_p';
    description_p.firstElementChild.style.height=description_p.firstElementChild.offsetWidth+'px';
    description.remove();
    if (window.innerWidth<500){
        description_p.style.left=50+"px";
        description_p.style.top=100+'px';
    }
    else{
        description_p.style.height=gum.offsetHeight-main.offsetHeight*0.037+"px";
    }
}
function description_gum(){
    description.innerHTML='<img src="img/GUM_map.jpg"><b>ГУМ </b><br> (Государственный универсальный магазин) <br> уникальный торговый комплекс в самом сердце Москвы, на Красной площади. Это памятник псевдорусской архитектуры федерального значения и один из самых ярких символов Москвы наряду с Кремлём и Покровским собором.<br>Здание трёхэтажное, занимает целый квартал Китай-города и состоит из 16 корпусов, разделённых 3 продольными и 3 поперечными проходами-галереями с остеклёнными арочными перекрытиями наверху. Главный, боковые и задний фасады пышно оформлены в псевдорусском стиле: среди декоративных элементов, заимствованных из русского узорочья, изобилуют резные наличники и карнизы, ширинки, колонки и полуколонки, гирьки и причудливые кокошники.<br>Главная фишка ГУМа — ажурные «стеклянные небеса», простирающиеся над торговыми рядами. Конструкция из стекла и металла — работа знаменитого инженера Владимира Шухова. <br> Современный ГУМ — это торгово-развлекательный центр с большим количеством магазинов, ресторанов и кафе. На его линиях часто проводятся различные выставки, появляются инсталляции и арт-объекты, а зимой перед магазином заливают ГУМ-Каток. ';
    main.insertBefore(description, tower);
    description_def();
}
function description_tower(){
    description.innerHTML='<img src="img/tower_map.jpg"><b>Спасская башня </b><br> проездная башня Московского Кремля, выходящая на Красную площадь. Построена в 1491 году архитектором Пьетро Солари. <br>Сооружение включает в себя 5 боевых ярусов, соединённых лестницей, что проходит в простенке из крупноформатного кирпича. Верхние ярусы оснащены бойницами навесного обстрела. <br> Внизу Спасская башня представлена удлинённым параллелепипедом. В верхней части каждой из его сторон расположены семь полуциркульных оконных рам, выделенных белокаменным поясом. У самой вершины объёма — полузаложенные удлинённые окна.  <br> Со стороны Красной площади и Кремля фасады декорированы готическими фронтонами, опирающимися на дорические колонны. Со всех сторон четырёхгранный объём увенчан рядом арок, украшенных белокаменными башенками, резными столбиками, колоннами и щипцами. <br> Верхняя часть башни представлена четвериком с часами, над которым возвышается восьмигранный объём, украшенный арками, колоннами и балюстрадами. <br> В 1937 году на сооружение поместили навершие в виде рубиновой звезды. В верхней части башни установлены знаменитые часы-куранты. ';
    main.insertBefore(description, Petr);
    description_def();
}
function description_Petr(){
    description_p.innerHTML='<img src="img/Petr_map.jpg"><b>Памятник Петру I </b><br> это композиция на насыпном острове напротив Крымской набережной в центре города. Она представляет собой пьедестал в виде ростральной колонны, корабль и фигуру самого императора у штурвала. <br> Общая высота памятника — 98 метров, высота фигуры Петра — 18 метров. Композиция изображает первого российского императора на палубе парусного судна, возвышающегося на остовах нескольких других кораблей, на носах и корме которых развеиваются Андреевские флаги. Правая рука монарха поднята вверх, удерживает скрученный свиток, по-видимому, содержащий указ о создании российского флота. <br> Основу сооружения составляет уникальная инженерная конструкция. Каркас из стальных несущих элементов обшит бронзовой облицовкой. Монумент собирали из трёх раздельных компонентов — скульптуры императора, корабля и постамента, служащего основанием композиции. <br> Комплекс окружён фонтаном, вечером и ночью включается подсветка.';
     if (window.innerWidth>500){
        description_p.style.left=tower.offsetLeft+40+'px';
    }
    main.insertBefore(description_p, tower);
    description_p_def();
}
function description_sobor(){
    description.innerHTML='<img src="img/sobor_map.jpg"><b>Храм Василия Блаженного </b><br> (Покровский собор) <br> архитектурный ансамбль из девяти отдельных церквей, объединённых общим основанием. В центре находится бесстолпная церковь Покрова Пресвятой Богородицы, вокруг неё сгруппированы 8 церквей поменьше. <br> Здание собора имеет чёткую структуру и представляет собой ромб, вписанный в квадрат, образуя в плане восьмиконечную звезду. 1 В центре композиции находится церковь Покрова Пресвятой Богородицы с высоким шатром и небольшой золочёной главкой. Восемь храмов поменьше с рельефными луковичными маковками разных цветов расположены вокруг неё. С восточной стороны стоит придел Василия Блаженного, с южной — двухъярусная шатровая колокольня. <br>Высота собора составляет 65 метров. В общей сложности Покровский собор украшают 11 куполов, 9 из которых расположены над церквями, один — над приделом Василия Блаженного, ещё один (совсем небольшой) — над колокольней. <br>Декоративное оформление храма выглядит пышно, но лаконично: оно включает традиционные для русской храмовой архитектуры ширинки, полуколонки, кокошники и гирьки. Галерея по всему периметру расписана изображениями цветов и растительным орнаментом.  <br> Самая почитаемая святыня — рака с мощами Василия Блаженного с покровом из атласа и шёлка, который был создан придворными мастерицами царицы Ирины Годуновой. ';
    main.insertBefore(description, cathedral);
    description_def();
}
function description_cathedral(){
    description.innerHTML='<img src="img/cathedral_map.jpg"><b>Храм Христа Спасителя </b><br> кафедральный собор Русской православной церкви в честь Рождества Христова в Москве. Возведён на улице Волхонка в русско-византийском стиле <br> Высота храма — 103 метра, что на полтора метра больше, чем Исаакиевский собор в Санкт-Петербурге.  <br> В храме три престола: главный, в честь Рождества Христова, и два боковых — во имя Николая Чудотворца и Святого Князя Александра Невского. <br> Главные святыни храма: Частица Ризы Иисуса Христа, мощи основателя храма, митрополита Московского Филарета (Дроздова), частицы мощей апостола Андрея Первозванного, святителя Иоанна Златоуста, святого Петра, митрополита Московского, святого Ионы, митрополита Московского, святого благоверного князя Александра Невского, чудотворный образ Владимирской Божией Матери и чудотворный образ Смоленской-Устюженской Божией Матери.';
    main.insertBefore(description, Leningrad);
    description_def();
}
function description_Leningrad(){  
    description_p.innerHTML='<img src="img/Leningrad_map.jpg"><b> Гостиница «Ленинградская» </b> <br> один из первых советских небоскрёбов и архитектурная доминанта площади трёх вокзалов. Она впечатляет своим пышным убранством не только снаружи, но и внутри. А ещё со зданием связана масса интересных фактов. За что высотку невзлюбил Хрущёв, почему она попала в Книгу рекордов Гиннеса и что роднит здание с церквями в духе московского барокко <br> 7‑этажный советский отель принял первых посетителей 1 ноября 1953‑го. Хотя постройка была самой невысокой из всех семи сталинских высоток (136 метров), на момент открытия гостиница считалась одной из самых технологичных в стране. Внутри действовала система кондиционирования воздуха, имелась собственная телефонная станция и котельная. <br> В 2006‑м в столице открылось представительство сети Hilton, а в 2008‑м исторический отель заработал под новым названием — «Хилтон Москва Ленинградская». Номера, которые к этому времени заметно обветшали, обновили. Их количество сократилось с 349 до 273. При этом пять комнат стилизовали в духе 1950‑х и обставили аутентичной мебелью, а общие помещения бережно отреставрировали. ';
    if (window.innerWidth>500){
        description_p.style.left=cathedral.offsetLeft+40+'px';
    }
    main.insertBefore(description_p, Leningrad);
    description_p_def();
}
function description_city(){
    description.innerHTML='<img src="img/city_map.jpg"><b>Москва-Сити </b><br> Современный международный деловой центр, в котором есть: <br> Смотровая площадка PANORAMA 360 на 89-м этаже башни «Федерация» (часть «Восток»). В ясную погоду отсюда виден весь город до горизонта. <br> Смотровая площадка «Выше только любовь» на крыше башни «ОКО». Это самая высокая площадка в Европе среди смотровых точек открытого типа (354 метра).<br>Смотровая площадка небоскрёба «Империя». Она уступает другим по высоте (215 метров), но главной её локацией стал музей комплекса «Москва-Сити», который расскажет об истории каждого здания.<br>Площадка «У башни 2000». Попасть сюда можно по мосту Багратион. С высоты 104 метров можно рассмотреть сам комплекс и сделать фотографии на фоне башни «Эволюция» в форме спирали ДНК.<br>Международный деловой центр «ОКО». Название небоскрёба расшифровывается как «Объединённые кристаллом основания». В южной башне «ОКО» — самый высотный жилой небоскрёб в Европе, а в северной — самый большой в России конференц-зал.<br>Башня «Евразия». Это самый высокий в Европе небоскрёб с металлическим каркасом.<br>Башня «Эволюция». Самой узнаваемой формой в «Москва-Сити» обладает башня Evolution tower, закрученная в спираль.<img src="img/city-e.jpg">';
    main.insertBefore(description, kuscovo);
    description_def();
}
function description_kuscovo(){
    description.innerHTML='<img src="img/kuscovo_map.jpg"><b>Усадьба Кусково </b><br>  бывшее имение графов Шереметевых, где сохранился архитектурно-художественный ансамбль XVIII века. Расположена на востоке Москвы на территории района Вешняки.<br>Ансамбль включает: дворец, построенный во второй половине XVIII века в стиле классицизма, регулярный, украшенный скульптурой парк с павильонами: «Грот», «Оранжерея», «Эрмитаж», «Итальянский» и «Голландский» домики, церковь Спаса Всемилостивого (XVIII в.), Музей керамики.<br> С 1919 года здесь открыт Государственный музей-усадьба «Кусково». В усадьбе сохранились редкие образцы художественной мебели и декоративно-прикладного искусства, книги из фамильной библиотеки и уникальная «Портретная галерея».<br>Адрес: г. Москва, ул. Юности, д. 2.';
    main.insertBefore(description, huamin);
    description_def();
}
function description_huamin(){  
    description_p.innerHTML='<img src="img/huamin_map.jpg"><b> Парк Хуамин </b> <br> расположен на территории одноимённого многофункционального центра.<br>На площади 5,2 га разместились традиционные китайские беседки и павильоны, мосты, водоёмы, сад камней. Искусственные холмы дополнены цветочными композициями и каменными скульптурами.<img src="img/huamin-e.jpg"><br>Условно территория разделена на три тематические зоны:<br>В центре размещается общественная зона с парковыми объектами и водоёмом. <br>В лесной части — прогулочная с деревянными дорожками и скамейками. Также есть хозяйственная зона.<br>В прогулочной части парка установлен памятник великому китайскому философу Конфуцию. <br>Добраться можно на личном автомобиле (есть парковка), на общественном транспорте или такси. Ближайшая станция метро — «Ботанический сад» (Калужско-Рижская линия), которая объединена с одноимённой станцией МЦК. До входа в парк — несколько минут ходьбы. <br>Адрес: улица Вильгельма Пика, 16.';
    if (window.innerWidth>500){
        description_p.style.left=kuscovo.offsetLeft+40+'px';
    }
    main.insertBefore(description_p, huamin);
    description_p_def();
}
function description_VDNH(){
    description.innerHTML='<img src="img/VDNH_map.jpg"><b>ВДНХ</b><br>  Выставка достижений народного хозяйства (ОАО «ВДНХ») (ранее Всесоюзная сельскохозяйственная выставка (ВСХВ) и Всероссийский выставочный центр, (ВВЦ)) — выставочный комплекс в Северо-Восточном округе Москвы, второй по величине выставочный комплекс в Москве. Входит в 50 крупнейших выставочных центров мира. Общая площадь территории ВДНХ — 237,5 га, площадь павильонов — 134 тыс. м².<br>Это выставочный комплекс в Останкинском районе Северо-Восточного административного округа города Москвы. Является крупнейшим выставочным комплексом в городе и входит в 50 крупнейших выставочных центров мира.<br>Ежегодно ВДНХ посещают 30 миллионов гостей.<br>На территории выставки расположено множество шедевров архитектуры — 49 объектов ВДНХ признаны памятниками культурного наследия.';
    main.insertBefore(description, ostankino);
    description_def();
}
function description_ostankino(){
    description.innerHTML='<img src="img/ostankino_map.jpg"><b>Останкинская телебашня</b><br>  главная теле- и радиовещательная башня страны, располагается у телецентра «Останкино», на улице Академика Королева<br>Высота Останкинской телебашни (с флагштоком) — 540 метров. Бетонная часть — 385 метров, опоры — 62 метра. По высоте главная телебашня России находится на 4 месте среди телебашен мира.<br>Архитектура башни — образец советского модернизма. Издалека сооружение похоже на ракету, готовящуюся к запуску. Конусообразное основание на 10 «лепестках» напоминает нижнюю ступень корабля, а круглые окна — иллюминаторы.<br>В расширении телебашни на уровне 325–360 метров разместились оборудование, 3-этажный ресторан и смотровая площадка, созданная по типу телебашни в Штутгарте.<br>Основная (застеклённая) смотровая площадка на телебашне расположена на высоте около 337 метров. Смотровая площадка открытого типа находится выше — на уровне чуть более 340 метров.';
    main.insertBefore(description, sokolniki);
    description_def();
}
function description_sokolniki(){  
    description_p.innerHTML='<img src="img/sokolniki_map.jpg"><b> Парк Сокольники </b> <br> парк на территории района Сокольники на востоке Москвы, с юга ограниченный Сокольническим Валом, с востока — Богородским шоссе, с севера — Ростокинским проездом, с запада — линией Ярославской железной дороги. На севере смыкается с Лосиным островом. Площадь парка — 516 гектаров. <br> Основная достопримечательность — живописная природа. Вековые деревья создают теневую прохладу на просеках в жаркий полдень.  <br> Парк включает в себя три зоны: заповедную (21,4 га), прогулочную (194,1 га) и зону охраны историко-культурных объектов (13,7 га). <br>В парке находится ряд спортивных объектов: физкультурно-оздоровительный комплекс «Сокольники», центр спортивных развлечений на открытом воздухе «Лидер», теннисный городок. Организован прокат веломобилей, велосипедов, сегвеев и различного спортивного инвентаря. ';
    if (window.innerWidth>500){
        description_p.style.left=ostankino.offsetLeft+40+'px';
    }
    main.insertBefore(description_p, sokolniki);
    description_p_def();
}
gum.addEventListener('click', description_gum);
tower.addEventListener('click', description_tower);
Petr.addEventListener('click', description_Petr);
sobor.addEventListener('click', description_sobor);
cathedral.addEventListener('click', description_cathedral);
Leningrad.addEventListener('click', description_Leningrad)
city.addEventListener('click', description_city);
kuscovo.addEventListener('click', description_kuscovo);
huamin.addEventListener('click', description_huamin);
VDNH.addEventListener('click', description_VDNH);
ostankino.addEventListener('click', description_ostankino);
sokolniki.addEventListener('click', description_sokolniki);
description.addEventListener('click', function(){
    description.innerHTML='';
    description.remove();
})
description_p.addEventListener('click', function(){
    description_p.innerHTML='';
    description_p.remove();
})

function search_f(){
    const items=["гум", "спасская башня", "памятник петру 1", 'храм василия блаженного', "храм христа спасителя", 'гостиница ленинградская', 'москва-сити', 'усадьба кусково', 'парк хуамин', 'вднх', 'останкинская телебашня', 'парк сокольники'];
    const query = search.value.toLowerCase();
    if (items.findIndex(element => element.includes(query))==0){
        window.scrollTo(0, gum.offsetTop-header.offsetHeight);
        description_gum();
    }
    else if (items.findIndex(element => element.includes(query))==1){
        window.scrollTo(0, tower.offsetTop-header.offsetHeight);
        description_tower();
    }
    else if (items.findIndex(element => element.includes(query))==2){
        window.scrollTo(0, Petr.offsetTop-header.offsetHeight);
        description_Petr();
    }
    else if (items.findIndex(element => element.includes(query))==3){
        window.scrollTo(0, sobor.offsetTop-header.offsetHeight);
        description_sobor();
    }
    else if (items.findIndex(element => element.includes(query))==4){
        window.scrollTo(0, cathedral.offsetTop-header.offsetHeight);
        description_cathedral();
    }
    else if (items.findIndex(element => element.includes(query))==5){
        window.scrollTo(0, Leningrad.offsetTop-header.offsetHeight);
        description_Leningrad();
    }
    else if (items.findIndex(element => element.includes(query))==6){
        window.scrollTo(0, city.offsetTop-header.offsetHeight);
        description_city();
    }
    else if (items.findIndex(element => element.includes(query))==7){
        window.scrollTo(0, kuscovo.offsetTop-header.offsetHeight);
        description_kuscovo();
    }
    else if (items.findIndex(element => element.includes(query))==8){
        window.scrollTo(0, huamin.offsetTop-header.offsetHeight);
        description_huamin();
    }
    else if (items.findIndex(element => element.includes(query))==9){
        window.scrollTo(0, VDNH.offsetTop-header.offsetHeight);
        description_VDNH();
    }
    else if (items.findIndex(element => element.includes(query))==10){
        window.scrollTo(0, ostankino.offsetTop-header.offsetHeight);
        description_ostankino();
    }
    else if (items.findIndex(element => element.includes(query))==11){
        window.scrollTo(0, sokolniki.offsetTop-header.offsetHeight);
        description_sokolniki();
    }
    return 0;
}
document.addEventListener('keydown', (e) => {
    if (e.keyCode==13) search_f();
})
btn.addEventListener('click', search_f);
console.log(5462);