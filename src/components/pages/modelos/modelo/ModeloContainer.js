import {useParams} from 'react-router-dom';
import Modelo from './Modelo';

//********************** MARCA FIAT ********************************** */

//imports argo
import argo_img1 from '../../../../images/fiat/argoimg1.jpg'
import argo_img2 from '../../../../images/fiat/central-multimidia.avif'
import argo_img3 from '../../../../images/fiat/volante-multifuncional.avif'
import argo_img4 from '../../../../images/fiat/tracao.jpg'
import argoFT from './fichastecnicas/argoft.pdf'
import argoHeader from "../../../../images/fiat/argoheader.jpg"
//imports cronos
import cronos_img1 from '../../../../images/fiat/cronosimg1.jpg'
import cronos_img2 from '../../../../images/fiat/cajaauto.jpg'
import cronos_img3 from '../../../../images/fiat/tapizadocronos.jpg'
import cronos_img4 from '../../../../images/fiat/motorcronos.jpg'
import cronosFT from './fichastecnicas/FichaTecnica_Cronos2B.pdf'
import cronosHeader from '../../../../images/fiat/Cronos2.jpg'
//imports ducato
import ducato_img1 from '../../../../images/fiat/fiat-ducato-shadow-edition.jpg'
import ducato_img2 from '../../../../images/fiat/ducato2.jpg'
import ducato_img3 from '../../../../images/fiat/ducato3.jpg'
import ducato_img4 from '../../../../images/fiat/ducato4.jpg'
import ducatoHeader from '../../../../images/fiat/banner_fiat_ducato.jpg'
import ducatoFT from './fichastecnicas/ficha-ducato-cargo.pdf'
//imports fiorino
import fiorino_img1 from '../../../../images/fiat/fio.jpg'
import fiorino_img2 from '../../../../images/fiat/fiorino2.webp'
import fiorino_img3 from '../../../../images/fiat/imagem6-medium.jpeg'
import fiorino_img4 from '../../../../images/fiat/fiorino3.jpg'
import fiorinoHeader from '../../../../images/fiat/forinobanner.jpg'
import fiorinoFT from './fichastecnicas/my22-fiat-fiorino.pdf'
//imports mobi
import mobi_img1 from '../../../../images/fiat/mobi1.jpg'
import mobi_img2 from '../../../../images/fiat/mobi2.png'
import mobi_img3 from '../../../../images/fiat/movi3.png'
import mobi_img4 from '../../../../images/fiat/mobi4.png'
import mobiHeader from '../../../../images/fiat/mobibanner.jpg'
import mobiFT from './fichastecnicas/Ficha-Tecnica_Mobi_004.pdf'
//imports strada
import strada_img1 from '../../../../images/fiat/strada1.jpg'
import strada_img2 from '../../../../images/fiat/strada2.jpg'
import strada_img3 from '../../../../images/fiat/strada3.jpg'
import strada_img4 from '../../../../images/fiat/strada4.jpg'
import stradaHeader from '../../../../images/fiat/stradabanner.jpg'
import stradaFT from './fichastecnicas/Ficha-Tecnica-NuevaStrada-MY21.pdf'
//imports toro
import toro_img1 from '../../../../images/fiat/toro1.jpg'
import toro_img2 from '../../../../images/fiat/toro2.jpg'
import toro_img3 from '../../../../images/fiat/toro3.jpg'
import toro_img4 from '../../../../images/fiat/toro4.png'
import toroHeader from '../../../../images/fiat/torobanner.jpg'
import toroFT from './fichastecnicas/Ficha-Tecnica-Fiat-Toro-MY21.pdf'
//imports uno
import uno_img1 from '../../../../images/fiat/uno1.jpg'
import uno_img2 from '../../../../images/fiat/uno2.jpg'
import uno_img3 from '../../../../images/fiat/uno3.png'
import uno_img4 from '../../../../images/fiat/uno4.png'
import unoHeader from '../../../../images/fiat/unobanner.jpg'
import unoFT from './fichastecnicas/ficha-tecnica-fiat-uno-way-2018pdf.pdf'

//********************** MARCA WOLKSWAGEN ********************************** */

//imports taos
import taos_img1 from '../../../../images/fiat/taos1.jpg'
import taos_img2 from '../../../../images/fiat/taos2.webp'
import taos_img3 from '../../../../images/fiat/taos3.jpg'
import taos_img4 from '../../../../images/fiat/taos4.jpg'
import taosHeader from '../../../../images/fiat/taosbanner.jpg'
import taosFT from './fichastecnicas/ficha-tecnica-vw-taospdf.pdf'

//imports nivus
import nivus_img1 from '../../../../images/volkswagen/nivus/nivus1.webp'
import nivus_img2 from '../../../../images/volkswagen/nivus/nivus2.webp'
import nivus_img3 from '../../../../images/volkswagen/nivus/nivus3.webp'
import nivus_img4 from '../../../../images/volkswagen/nivus/nivus4.webp'
import nivusHeader from '../../../../images/volkswagen/nivus/nivusbanner.webp'
import nivusFT from '../../../../images/volkswagen/nivus/nivus.pdf'

//imports gol
import gol_img1 from '../../../../images/volkswagen/gol/gol1.webp'
import gol_img2 from '../../../../images/volkswagen/gol/gol2.webp'
import gol_img3 from '../../../../images/volkswagen/gol/gol3.webp'
import gol_img4 from '../../../../images/volkswagen/gol/gol4.webp'
import golHeader from '../../../../images/volkswagen/gol/golbanner.webp'
import golFT from '../../../../images/volkswagen/gol/gol.pdf'

//imports polo
import polo_img1 from '../../../../images/volkswagen/polo/polo1.webp'
import polo_img2 from '../../../../images/volkswagen/polo/polo2.webp'
import polo_img3 from '../../../../images/volkswagen/polo/polo3.webp'
import polo_img4 from '../../../../images/volkswagen/polo/polo4.webp'
import poloHeader from '../../../../images/volkswagen/polo/polobanner.webp'
import poloFT from '../../../../images/volkswagen/polo/polo.pdf'

//imports virtus
import virtus_img1 from '../../../../images/volkswagen/virtus/virtus1.webp'
import virtus_img2 from '../../../../images/volkswagen/virtus/virtus2.webp'
import virtus_img3 from '../../../../images/volkswagen/virtus/virtus3.webp'
import virtus_img4 from '../../../../images/volkswagen/virtus/virtus4.webp'
import virtusHeader from '../../../../images/volkswagen/virtus/virtusbanner.webp'
import virtusFT from '../../../../images/volkswagen/virtus/virtus.pdf'

//imports t-cross
import tcross_img1 from '../../../../images/volkswagen/tcross/tcross1.webp'
import tcross_img2 from '../../../../images/volkswagen/tcross/tcross2.webp'
import tcross_img3 from '../../../../images/volkswagen/tcross/tcross3.webp'
import tcross_img4 from '../../../../images/volkswagen/tcross/tcross4.webp'
import tcrossHeader from '../../../../images/volkswagen/tcross/tcrossbanner.webp'
import tcrossFT from '../../../../images/volkswagen/tcross/tcross.pdf'

//imports vento
import vento_img1 from '../../../../images/volkswagen/vento/vento1.jpg'
import vento_img2 from '../../../../images/volkswagen/vento/vento2.webp'
import vento_img3 from '../../../../images/volkswagen/vento/vento3.webp'
import vento_img4 from '../../../../images/volkswagen/vento/vento4.webp'
import ventoHeader from '../../../../images/volkswagen/vento/ventobanner.webp'
import ventoFT from '../../../../images/volkswagen/vento/vento.pdf'

//imports tiguan
import tiguan_img1 from '../../../../images/volkswagen/tiguan/tiguan1.webp'
import tiguan_img2 from '../../../../images/volkswagen/tiguan/tiguan2.webp'
import tiguan_img3 from '../../../../images/volkswagen/tiguan/tiguan3.webp'
import tiguan_img4 from '../../../../images/volkswagen/tiguan/tiguan4.webp'
import tiguanHeader from '../../../../images/volkswagen/tiguan/tiguanbanner.webp'
import tiguanFT from '../../../../images/volkswagen/tiguan/tiguan.pdf'

//imports touareg
import touareg_img1 from '../../../../images/volkswagen/touareg/touareg1.webp'
import touareg_img2 from '../../../../images/volkswagen/touareg/touareg2.webp'
import touareg_img3 from '../../../../images/volkswagen/touareg/touareg3.webp'
import touareg_img4 from '../../../../images/volkswagen/touareg/touareg4.webp'
import touaregHeader from '../../../../images/volkswagen/touareg/touaregbanner.webp'
import touaregFT from '../../../../images/volkswagen/touareg/touareg.pdf'

//imports saveiro
import saveiro_img1 from '../../../../images/volkswagen/saveiro/saveiro1.webp'
import saveiro_img2 from '../../../../images/volkswagen/saveiro/saveiro2.webp'
import saveiro_img3 from '../../../../images/volkswagen/saveiro/saveiro3.webp'
import saveiro_img4 from '../../../../images/volkswagen/saveiro/saveiro4.webp'
import saveiroHeader from '../../../../images/volkswagen/saveiro/saveirobanner.webp'
import saveiroFT from '../../../../images/volkswagen/saveiro/saveiro.pdf'

//imports saveiro
import amarok_img1 from '../../../../images/volkswagen/amarok/amarok1.webp'
import amarok_img2 from '../../../../images/volkswagen/amarok/amarok2.webp'
import amarok_img3 from '../../../../images/volkswagen/amarok/amarok3.webp'
import amarok_img4 from '../../../../images/volkswagen/amarok/amarok4.webp'
import amarokHeader from '../../../../images/volkswagen/amarok/amarokbanner.webp'
import amarokFT from '../../../../images/volkswagen/amarok/amarok.pdf'

//********************** MARCA RENAULT ********************************** */

//imports sandero
import sandero_img1 from '../../../../images/fiat/sandero1.webp'
import sandero_img2 from '../../../../images/fiat/sandero2.webp'
import sandero_img3 from '../../../../images/fiat/sandero3.webp'
import sandero_img4 from '../../../../images/fiat/sandero4.webp'
import sanderoHeader from '../../../../images/fiat/sanderobanner.jpg'
import sanderoFT from './fichastecnicas/22bf9cb5b8.pdf'
//imports stepway
import stepway_img1 from '../../../../images/renault/stepway/stepway1.webp'
import stepway_img2 from '../../../../images/renault/stepway/stepway2.webp'
import stepway_img3 from '../../../../images/renault/stepway/stepway3.webp'
import stepway_img4 from '../../../../images/renault/stepway/stepway4.webp'
import stepwayHeader from '../../../../images/renault/stepway/stepway_header.webp'
import stepwayFT from '../../../../images/renault/stepway/stepway.pdf'
//imports logan
import logan_img1 from '../../../../images/renault/logan/logan1.webp'
import logan_img2 from '../../../../images/renault/logan/logan2.webp'
import logan_img3 from '../../../../images/renault/logan/logan3.webp'
import logan_img4 from '../../../../images/renault/logan/logan4.webp'
import loganHeader from '../../../../images/renault/logan/logan_header.webp'
import loganFT from '../../../../images/renault/logan/logan.pdf'
//imports kangoo
import kangoo_img1 from '../../../../images/renault/kangoo/kangoo1.webp'
import kangoo_img2 from '../../../../images/renault/kangoo/kangoo2.webp'
import kangoo_img3 from '../../../../images/renault/kangoo/kangoo3.webp'
import kangoo_img4 from '../../../../images/renault/kangoo/kangoo4.webp'
import kangooHeader from '../../../../images/renault/kangoo/kangoo_header.webp'
import kangooFT from '../../../../images/renault/kangoo/kangoo.pdf'
//imports captur
import captur_img1 from '../../../../images/renault/captur/captur1.webp'
import captur_img2 from '../../../../images/renault/captur/captur2.webp'
import captur_img3 from '../../../../images/renault/captur/captur3.webp'
import captur_img4 from '../../../../images/renault/captur/captur4.webp'
import capturHeader from '../../../../images/renault/captur/captur_header.webp'
import capturFT from '../../../../images/renault/captur/captur.pdf'
//imports koleos
import koleos_img1 from '../../../../images/renault/koleos/koleos1.webp'
import koleos_img2 from '../../../../images/renault/koleos/koleos2.webp'
import koleos_img3 from '../../../../images/renault/koleos/koleos3.webp'
import koleos_img4 from '../../../../images/renault/koleos/koleos4.webp'
import koleosHeader from '../../../../images/renault/koleos/koleos_header.webp'
import koleosFT from '../../../../images/renault/koleos/koleos.pdf'
//imports duster
import duster_img1 from '../../../../images/renault/duster/duster1.webp'
import duster_img2 from '../../../../images/renault/duster/duster2.webp'
import duster_img3 from '../../../../images/renault/duster/duster3.webp'
import duster_img4 from '../../../../images/renault/duster/duster4.webp'
import dusterHeader from '../../../../images/renault/duster/duster_header.webp'
import dusterFT from '../../../../images/renault/duster/duster.pdf'

//********************** MARCA JEEP ********************************** */

//renegade
import renegadeFT from './fichastecnicas/FICHA-RENEGADE.pdf'
//compass
import CompassFT from './fichastecnicas/Jeep_Compass_Ficha_Tecnica_Naftera_MY22.pdf'

//imports wrangler
import wrangler_img1 from '../../../../images/jeep/wrangler/wrangler1.jpg'
import wrangler_img2 from '../../../../images/jeep/wrangler/wrangler2.jpg'
import wrangler_img3 from '../../../../images/jeep/wrangler/wrangler3.jpg'
import wrangler_img4 from '../../../../images/jeep/wrangler/wrangler4.jpg'
import wranglerHeader from '../../../../images/jeep/wrangler/wranglerbanner.jpg'
import wranglerFT from '../../../../images/jeep/wrangler/wrangler.pdf'

//imports gladiator
import gladiator_img1 from '../../../../images/jeep/gladiator/gladiator1.jpg'
import gladiator_img2 from '../../../../images/jeep/gladiator/gladiator2.jpg'
import gladiator_img3 from '../../../../images/jeep/gladiator/gladiator3.jpg'
import gladiator_img4 from '../../../../images/jeep/gladiator/gladiator4.jpg'
import gladiatorHeader from '../../../../images/jeep/gladiator/gladiatorbanner.jpg'
import gladiatorFT from '../../../../images/jeep/gladiator/gladiator.pdf'

//imports commander
import commander_img1 from '../../../../images/jeep/commander/commander1.jpg'
import commander_img2 from '../../../../images/jeep/commander/commander2.jpg'
import commander_img3 from '../../../../images/jeep/commander/commander3.jpg'
import commander_img4 from '../../../../images/jeep/commander/commander4.jpg'
import commanderHeader from '../../../../images/jeep/commander/commanderbanner.jpg'
import commanderFT from '../../../../images/jeep/commander/commander.pdf'

//imports cherokee
import cherokee_img1 from '../../../../images/jeep/cherokee/cherokee1.jpg'
import cherokee_img2 from '../../../../images/jeep/cherokee/cherokee2.jpg'
import cherokee_img3 from '../../../../images/jeep/cherokee/cherokee3.jpg'
import cherokee_img4 from '../../../../images/jeep/cherokee/cherokee4.jpg'
import cherokeeHeader from '../../../../images/jeep/cherokee/cherokeebanner.jpg'
import cherokeeFT from '../../../../images/jeep/cherokee/cherokee.pdf'


//********************** MARCA CITROEN ********************************** */

//c3
import c3FT from './fichastecnicas/Ficha-Tecnica-Citroen-C3.pdf'
//c4
import c4FT from './fichastecnicas/ficha-tecnica-nuevo-suv-c4-cactus.pdf'

//imports c5
import c5_img1 from '../../../../images/citroen/c5/c5_1.jpg'
import c5_img2 from '../../../../images/citroen/c5/c5_2.webp'
import c5_img3 from '../../../../images/citroen/c5/c5_3.jpg'
import c5_img4 from '../../../../images/citroen/c5/c5_4.jpg'
import c5Header from '../../../../images/citroen/c5/c5banner.webp'
import c5FT from '../../../../images/citroen/c5/c5.pdf'

//imports berlingo
import berlingo_img1 from '../../../../images/citroen/berlingo/berlingo1.jpg'
import berlingo_img2 from '../../../../images/citroen/berlingo/berlingo2.jpg'
import berlingo_img3 from '../../../../images/citroen/berlingo/berlingo3.jpg'
import berlingo_img4 from '../../../../images/citroen/berlingo/berlingo4.jpg'
import berlingoHeader from '../../../../images/citroen/berlingo/berlingobanner.jpg'
import berlingoFT from '../../../../images/citroen/berlingo/berlingo.pdf'


const modelos = [
  {id: 'argo', title: "No manej??s, sent??s. #FiatArgo", title2: 'FIAT ARGO', description: "La esencia italiana y el estilo del FIAT Argo se combinan para lograr deportividad y atractivo en este modelo.", thumbnail: [{img: argo_img1, desc: ''}, {img: argo_img2, desc: 'CENTRAL MULTIMEDIA DE 7"'}, {img: argo_img3, desc: 'VOLANTE MULTIFUNCIONAL'}, {img: argo_img4, desc: 'CONTROL DE TRACCI??N Y ESTABILIDAD'}], header: argoHeader, ficha: [argoFT, "ficha_tec_argo"],},
  {id: 'cronos', title: "El m??s elegido por los Argentinos. #FiatCronos", title2: 'FIAT CRONOS', description: "L??neas de figura, dise??o italiano, aspecto deportivo y atrevido que llama la atenci??n en todos lados.", thumbnail: [{img: cronos_img1, desc: ''}, {img: cronos_img2, desc: 'CAJA AUTOM??TICA'}, {img: cronos_img3, desc: 'TAPIZADO EN CUERO'}, {img: cronos_img4, desc: 'MOTOR 1.8DE 130CV'}], header: cronosHeader, ficha: [cronosFT, "ficha_tec_cronos"],},
  {id: 'ducato', title: "Listo para cualquier rutina. #FiatDucato", title2: 'FIAT DUCATO', description: "A bordo de la cabina del Fiat Ducato todo es nuevo. Con m??s espacio, comodidad, visibilidad al conducir y mucha practicidad para todos los ocupantes, conducir tu negocio va a ser mucho m??s agradable.", thumbnail: [{img: ducato_img1, desc: ''}, {img: ducato_img2, desc: ''}, {img: ducato_img3, desc: ''}, {img: ducato_img4, desc: ''}], header: ducatoHeader, ficha: [ducatoFT, "ficha_tec_ducato"],},
  {id: 'fiorino', title: "La confiabilidad de siempre. #FiatFiorino", title2: 'FIAT FIORINO', description: "El Fiorino creci?? en tama??o, logrando desde su estilo exterior un mayor ??size impression??, pero sin perder agilidad para moverse por los centros urbanos, su h??bitat natural.", thumbnail: [{img: fiorino_img1, desc: ''}, {img: fiorino_img2, desc: 'ESPACIO PARA TODO LO QUE NECESITAS'}, {img: fiorino_img3, desc: 'RENOVADO PARA UN MAYOR CONFORT'}, {img: fiorino_img4, desc: 'LA CONFIABILIDAD DE SIEMPRE'}], header: fiorinoHeader, ficha: [fiorinoFT, "ficha_tec_fiorino"],},
  {id: 'mobi', title: "La agilidad que necesitas. #FiatMobi", title2: 'FIAT MOBI', description: 'El FIAT Mobi mantiene su esencia pero ahora renueva su parrilla delantera y algunos otros detalles en l??nea con el resto de los modelos de FIAT. Este city car tambi??n agrega novedades en el equipamiento como la central multimedia de 7" con conectividad Android Auto & Carplay.', thumbnail: [{img: mobi_img1, desc: ''}, {img: mobi_img2, desc: 'CENTRAL MULTIMEDIA CON CONEXI??N A TU TEL??FONO'}, {img: mobi_img3, desc: 'UN INTERIOR QUE HACE LA DIFERENCIA'}, {img: mobi_img4, desc: 'VOLANTE CON TODOS LOS COMANDOS'}], header: mobiHeader, ficha: [mobiFT, "ficha_tec_mobi"],},
  {id: 'strada', title: "Como siempre, como nunca. #FiatStrada", title2: 'FIAT STRADA', description: "La Strada concilia el concepto de pick-up robusta, confiable y con excelente capacidad de carga con los atributos de confort y seguridad de un auto con espacio para 4 pasajeros en las versiones doble cabina.", thumbnail: [{img: strada_img1, desc: ''}, {img: strada_img2, desc: 'CAPACIDAD DE CARGA'}, {img: strada_img3, desc: 'CONFORT Y TECNOLOG??A'}, {img: strada_img4, desc: 'ESPACIO INTERNO'}], header: stradaHeader, ficha: [stradaFT, "ficha_tec_strada"],},
  {id: 'toro', title: "Cargada de actitud. #FiatToro", title2: 'FIAT TORO', description: "La Pick Up Fiat Toro combina robustez, fuerza y potencia con un dise??o y estilo ??nicos en el segmento. Robusta y elegante, con equipamiento superior en tecnolog??a, confort y seguridad.", thumbnail: [{img: toro_img1, desc: ''}, {img: toro_img2, desc: 'CENTRAL MULTIMEDIA DE 7" CON NAVEGADOR SATELITAL'}, {img: toro_img3, desc: 'CAPACIDAD DE CARGA HASTA 1 TONELADA'}, {img: toro_img4, desc: 'TAPIZADO EN CUERO'}], header: toroHeader, ficha: [toroFT, "ficha_tec_toro"],},
  {id: 'uno', title: "", title2: 'FIAT UNO', description: "El Fiat Uno llama la atenci??n. Adem??s de su renovado dise??o frontal ???m??s moderno y lleno de personalidad???, el Uno cuenta con nuevos paragolpes y parrilla, que resaltan los contornos del modelo.", thumbnail: [{img: uno_img1, desc: ''}, {img: uno_img2, desc: 'VOLANTE MULTIFUNCION'}, {img: uno_img3, desc: 'PANTALLA LCE T??CTIL DE 6,2" CON SENSOR DE ESTACIONAMIENTO'}, {img: uno_img4, desc: 'ANDA MUCHO, GASTA POCO'}], header: unoHeader, ficha: [unoFT, "ficha_tec_uno"],},
  {id: 'sandero', title: "El auto para todo lo que sos. #RenaultSandero", title2: 'RENAULT SANDERO', description: "Con un dise??o completamente renovado, su nueva identidad lum??nica, llantas diamantadas 16??? y su caja CVT, el Renault SANDERO es el auto perfecto que se adapta a todo lo que sos.", thumbnail: [{img: sandero_img1, desc: ''}, {img: sandero_img2, desc: 'CAJA DE CAMBIOS CVT X-TRONIC'}, {img: sandero_img3, desc: 'MEDIA EVOLUTION EN UNA PANTALLA DE 7" T??CTIL'}, {img: sandero_img4, desc: 'ESP Y HSA'}], header: sanderoHeader, ficha: [sanderoFT, "ficha_tec_sandero"],},
  {id: 'taos', title: "Tu pr??ximo SUVW. #SUVWTaos", title2: 'SUVW Taos', description: "Taos est?? equipado con el moderno motor 250 TSI, con probada eficiencia que brinda todo el empuje necesario gracias a su torque y permitiendo adem??s un menor consumo de combustible. ", thumbnail: [{img: taos_img1, desc: ''}, {img: taos_img2, desc: 'IQ.DRIVE: TECNOLOG??A DE ASISTENCIA'}, {img: taos_img3, desc: 'PANTALLA T??CTIL DE 8" DISCOVER MEDIA'}, {img: taos_img4, desc: 'TECHO SOLAR PANORAMICO'}], header: taosHeader, ficha: [taosFT, "ficha_tec_argo"],},
  {id: 'renegade', title: "M??s que un SUV, un JEEP. #JeepRenegade", title2: 'JEEP RENEGADE', description: "Cl??sico estilo JEEP. Desde la ic??nica parrilla de siete ranuras hasta su potente presencia, el Jeep?? Renegade es un veh??culo siempre dispuesto y preparado para explorar nuevos caminos.", thumbnail: [{img: "https://karvi-certified-images-ar.s3.amazonaws.com/1VdBzivEabzNS9dQrr3qFIWb3RwE_LaJb.jpg", desc: ''}, {img: "https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/renegade/2019/2019-Jeep-Renegade-Interior-4.1.jpg.img.1000.jpg", desc: 'EQUIPADO PARA LA AVENTURA'}, {img: "https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/renegade/2019/2019-Jeep-Renegade-Interior-3.1.jpg.img.1000.jpg", desc: 'MANEJ?? CON TRANQUILIDAD'}, {img: "https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/compass/descripcion-general/modelizer/sport-t270/1.jpg.img.500.jpg", desc: 'SISTEMA MULTIMEDIA UCONNECT TOUCH 5"'}], header: "https://www.iberocar.cl/wp-content/uploads/2021/03/banner_jeep_renegade.jpg", ficha: [renegadeFT, "ficha_tec_renegade"],},
  {id: 'compass', title: "El estilo de tu libertad. #JeepCompass", title2: 'JEEP COMPASS', description: "El nuevo Compass es a??n m??s elegante y est?? dise??ado para causar una gran impresi??n. Estrena renovados dise??os de paragolpes y parrilla delantera, el badge T270 y llantas exteriores. La gran novedad son los nuevos faros delanteros y traseros con tecnolog??a LED presentes en todas las versiones, que hacen que el nuevo Compass se destaque por fuera de lo com??n. ", thumbnail: [{img: "https://1.bp.blogspot.com/-XjZFdpTDHCk/YVTrYm7MwiI/AAAAAAAAnLM/AzWNL-QqONw_6gzGmX8kQ-GdPojubDd4gCLcBGAsYHQ/w1200-h630-p-k-no-nu/Jeep-Compass-2022.jpg", desc: ''}, {img: "https://www.jeep.com.ar/content/dam/cross-regional/apac/jeep/en_in/allnewjeepcompass7thjan/new-compass-price-reveal-23Jan/overview/3-10.jpg.img.1000.jpg", desc: 'CONFORT Y ESTILO'}, {img: "https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/compass/descripcion-general/modelizer/sport-t270/2-new.jpg.img.500.jpg", desc: 'SISTEMA MULTIMEDIA UCONNECT DE 8,4"'}, {img: "https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/compass/descripcion-general/modelizer/sport-t270/1.jpg.img.500.jpg", desc: 'CAJA AUTOMATICA DE 6 VELOCIDADES'}], header: "https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/compass/descripcion-general/carrusel/1.jpg.img.1440.jpg", ficha: [CompassFT, "ficha_tec_compass"],},
  {id: 'c3', title: "Conquistando las calles con estilo y personalidad. #CitroenC3", title2: 'CITROEN C3', description: "El nuevo C3 unifica las caracter??sticas del hatchback con las de un SUV. Imponente con uno de los mayores despejes del suelo del segmento. Proporcionando bienestar a bordo, una posici??n de manejo inigualable y una excelente experiencia de conducci??n. El nuevo C3 te brinda lo mejor de los dos mundos. ", thumbnail: [{img: "https://s1.cdn.autoevolution.com/images/models/CITROEN_C3-Aircross-2021_main.jpg", desc: ''}, {img: "https://media.citroen.com.ar/image/80/4/audioyconectividad_1.357804.70.jpg?vers=1", desc: 'SISTEMA MULTIMEDIA DE 7"'}, {img: "https://media.citroen.com.ar/image/38/7/747x322-citroen-c3-gran-capacidad-1.30387.70.jpg", desc: 'GRAN CAPACIDAD, MODULARIDAD Y F??CIL ACCESO'}, {img: "https://media.citroen.com.ar/image/80/5/audioyconectividad_2.357805.70.jpg?vers=1", desc: 'MIRRORSCREEN TAMBIEN MANEJABLE DESDE LOS MANDOS DEL VOLANTE'}], header: "https://www.sbwakefield.co.uk/media/images/51697992/50800515head-image.jpg", ficha: [c3FT, "ficha_tec_c3"],},
  {id: 'c4-cactus', title: "Bienvenido a la nueva generaci??n SUV. #CitroenC4Cactus", title2: 'CITROEN C4 CACTUS', description: "El Nuevo CITRO??N C4 CACTUS es una alternativa al segmento SUV que sienta las bases de un nuevo concepto de autom??vil, ofreciendo m??s dise??o, m??s confort y m??s tecnolog??a.", thumbnail: [{img: "https://media.citroen.com.ar/image/12/2/diseno-provocador.350122.png?vers=1", desc: ''}, {img: "https://media.citroen.com.ar/image/90/5/espacio-interno.294905.70.png", desc: 'HABITABILIDAD Y VERSATILIDAD'}, {img: "https://media.citroen.com.ar/image/11/5/usp_techo-flotante-v2.350115.70.jpg?vers=1", desc: 'BARRAS DE TECHO FLOTANTES'}, {img: "https://media.citroen.com.ar/image/90/4/universo-interno.294904.70.png", desc: 'UNIVERSO INTERNO EXCLUSIVO Y TECNOL??GICO'}], header: "https://tormo.com.ar/wp-content/uploads/2021/10/Citroe%CC%88n-C4-Cactus-X-SERIES-1-Tormo.jpeg", ficha: [c4FT, "ficha_tec_argo"],},
    {id: 'stepway', 
    title: "Sea cual sea el camino que elijas, est??s a la altura. #RenaultStepway", 
    title2: 'RENAULT STEPWAY', 
    description: "Su gran despeje del suelo y sus nuevos faros C-Shape le otorgan una actitud intr??pida que junto a las luces LED traseras, trazan una l??nea que resalta el movimiento. Un auto dise??ado a la altura de lo que te propongas.", 
    thumbnail: [
      {img: stepway_img1, desc: ''}, 
      {img: stepway_img2, desc: 'Seguridad Pasiva'}, 
      {img: stepway_img3, desc: 'Nueva caja de cambios CVT X-Tronic'}, 
      {img: stepway_img4, desc: 'ESP Y HSA'}
    ], 
    header: stepwayHeader, 
    ficha: [stepwayFT, "ficha_tec_stepway"],
    },

    {id: 'logan', 
    title: "Sentite c??modo con tu momento. #RenaultLogan", 
    title2: 'RENAULT LOGAN', 
    description: "El dise??o renovado, el gran espacio interior junto con un ba??l suficientemente grande para todo lo que quer??s llevar, son algunas de las caracter??sticas que hacen al Renault LOGAN, el veh??culo que te merec??s.", 
    thumbnail: [
      {img: logan_img1, desc: ''}, 
      {img: logan_img2, desc: 'Panel de instrumentos optimizado'}, 
      {img: logan_img3, desc: 'Mantenete conectado'}, 
      {img: logan_img4, desc: 'Disfrut?? de un viaje placentero'}
    ], 
    header: loganHeader, 
    ficha: [loganFT, "ficha_tec_logan"],
    },

    {id: 'kangoo', 
    title: "Recargado de proyectos. #RenaultKangoo", 
    title2: 'RENAULT KANGOO', 
    description: "Nuevo Renault KANGOO, pensado para viajar acompa??ado y compartir todo tipo de aventuras. En familia o con amigos, al campo o a la playa, el Kangoo est?? dise??ado para que cada traves??a sea ??nica, no s??lo en fines de semana o vacaciones. Con amplio espacio, tambi??n es un veh??culo ideal para moverse c??modamente por la ciudad. Para ir al trabajo, llevar los chicos al colegio, hacer las compras en el supermercado o para disfrutar de salidas divertidas. Todos ser??n bienvenidos, todos viajar??n c??modos en el nuevo Renault KANGOO.", 
    thumbnail: [
      {img: kangoo_img1, desc: ''}, 
      {img: kangoo_img2, desc: 'Multimedia, C??mara y sensores de estacionamiento'}, 
      {img: kangoo_img3, desc: 'Limitador y control de velocidad crucero'}, 
      {img: kangoo_img4, desc: 'Seguridad activa'}
    ], 
    header: kangooHeader, 
    ficha: [kangooFT, "ficha_tec_kangoo"],
    },

    {id: 'captur', 
    title: "Qu?? bueno verme ah??. #RenaultCaptur", 
    title2: 'RENAULT CAPTUR', 
    description: "Inspirado en el concept car del mismo nombre, Renault CAPTUR representa un nuevo lenguaje en t??rminos de dise??o: moderno y sofisticado.", 
    thumbnail: [
      {img: captur_img1, desc: ''}, 
      {img: captur_img2, desc: 'M??ltiples espacios'}, 
      {img: captur_img3, desc: 'Cornering Lights'}, 
      {img: captur_img4, desc: 'Seguridad activa'}
    ], 
    header: capturHeader, 
    ficha: [capturFT, "ficha_tec_kangoo"],
    },

    {id: 'koleos', 
    title: "Conquistalo todo. #RenaultKoleos", 
    title2: 'NUEVA RENAULT KOLEOS', 
    description: "Un imponente estilo y una refinada elegancia se combinan para ampliar tus horizontes. La nueva Renault KOLEOS es una SUV que inspira respeto. Es amplia, robusta, con grandes llantas y gran distancia entre ejes. Sin importar la ruta o aventura que quieras emprender con la Renault KOLEOS pod??s conquistarlo todo.", 
    thumbnail: [
      {img: koleos_img1, desc: ''}, 
      {img: koleos_img2, desc: 'Central multimedia de 7???'}, 
      {img: koleos_img3, desc: 'Easy park assist'}, 
      {img: koleos_img4, desc: 'Todas las expresiones de confort'}
    ], 
    header: koleosHeader, 
    ficha: [koleosFT, "ficha_tec_koleos"],
    },

    {id: 'duster', 
    title: "Para la nueva temporada de tu vida. #RenaultDuster", 
    title2: 'RENAULT DUSTER', 
    description: "El RENAULT DUSTER lleg?? para que seas el protagonista de todas tus aventuras. Un SUV dise??ado para disfrutar de la vida off road, nuevas experiencias y recorrer todos los rincones de nuestro pa??s de una forma atrevida, conectada y con personalidad.", 
    thumbnail: [
      {img: duster_img1, desc: ''}, 
      {img: duster_img2, desc: 'Motor 1.3L TCe Turbo y caja CVT X-Tronic 8'}, 
      {img: duster_img3, desc: 'Exterior e interior renovados'}, 
      {img: duster_img4, desc: 'Nueva tecnolog??a y conectividad'}
    ], 
    header: dusterHeader, 
    ficha: [dusterFT, "ficha_tec_duster"],
    },

    {id: 'nivus', 
    title: "Dise??o moderno e innovador", 
    title2: 'WOLKSWAGEN NIVUS', 
    description: "El integrante de la familia Volkswagen que re??ne la mezcla exacta entre modernidad, potencia y tecnolog??a. Y cada vez est??s m??s cerca de tenerlo. VW Nivus viene con Motor TSI, VW Play y el dise??o m??s innovador.", 
    thumbnail: [
      {img: nivus_img1, desc: ''}, 
      {img: nivus_img2, desc: 'Airbags y control de estabilidad'}, 
      {img: nivus_img3, desc: 'Tapizado de cuero ecol??gico, el climatizador autom??tico y difusores de aire traseros '}, 
      {img: nivus_img4, desc: 'Eficiencia y potencia, todo en el motor 200 TSI'}
    ], 
    header: nivusHeader, 
    ficha: [nivusFT, "ficha_tec_nivus"],
    },

    {id: 'gol', 
    title: "Un cl??sico que se convierte en leyenda", 
    title2: 'WOLKSWAGEN GOL', 
    description: "Todos conocemos a alguien que tiene o tuvo un Gol, es imposible no reconocerlo en la calle y es el protagonista de infinitas historias. Despedimos al Gol, le damos la bienvenida a la leyenda.", 
    thumbnail: [
      {img: gol_img1, desc: ''}, 
      {img: gol_img2, desc: 'Una mirada ??nica. Frente m??s robusto y firme'}, 
      {img: gol_img3, desc: 'Caja autom??tica Tiptronic de 6 velocidades'}, 
      {img: gol_img4, desc: 'Soporte para el tel??fono celular con puerto USB de carga'}
    ], 
    header: golHeader, 
    ficha: [golFT, "ficha_tec_gol"],
    },

    {id: 'polo', 
    title: "Vas a querer llamarlo tu nuevo auto", 
    title2: 'WOLKSWAGEN POLO', 
    description: "El Nuevo Polo GTS viene con diversos equipamientos de seguridad y confort que no s??lo van a impresionarte, te van a dar ganas de no bajarte nunca.", 
    thumbnail: [
      {img: polo_img1, desc: ''}, 
      {img: polo_img2, desc: 'M??xima protecci??n con airbags'}, 
      {img: polo_img3, desc: 'Active Info Display'}, 
      {img: polo_img4, desc: 'Transmisi??n autom??tica de 6 velocidades'}
    ], 
    header: poloHeader, 
    ficha: [poloFT, "ficha_tec_polo"],
    },

    {id: 'virtus', 
    title: "La potencia que busc??s, con la comodidad que necesit??s", 
    title2: 'WOLKSWAGEN VIRTUS', 
    description: "El Nuevo Virtus GTS se convierte en una nueva referencia en deportividad marcando diferencia con su gran espacio interno.", 
    thumbnail: [
      {img: virtus_img1, desc: ''}, 
      {img: virtus_img2, desc: 'Active Info Display'}, 
      {img: virtus_img3, desc: 'Manual Cognitivo'}, 
      {img: virtus_img4, desc: 'Airbags frontales y laterales'}
    ], 
    header: virtusHeader, 
    ficha: [virtusFT, "ficha_tec_virtus"],
    },

    {id: 'tcross', 
    title: "Nuevo motor, nuevas historias", 
    title2: 'WOLKSWAGEN T-CROSS', 
    description: "El nuevo T-Cross TSI fue creado para brindarte toda la potencia, conectividad, versatilidad y seguridad", 
    thumbnail: [
      {img: tcross_img1, desc: ''}, 
      {img: tcross_img2, desc: 'Asientos de cuero'}, 
      {img: tcross_img3, desc: 'Airbags. Protecci??n en todo momento.'}, 
      {img: tcross_img4, desc: 'Tablero digital'}
    ], 
    header: tcrossHeader, 
    ficha: [tcrossFT, "ficha_tec_tcross"],
    },

    {id: 'vento', 
    title: "Tecnolog??a que te moviliza", 
    title2: 'WOLKSWAGEN VENTO', 
    description: "Con Vento, el presente es digital", 
    thumbnail: [
      {img: vento_img1, desc: ''}, 
      {img: vento_img2, desc: 'Tecnolog??a para todos tus viajes'}, 
      {img: vento_img3, desc: 'Llantas de doble tono'}, 
      {img: vento_img4, desc: 'Faros y luces LED'}
    ], 
    header: ventoHeader, 
    ficha: [ventoFT, "ficha_tec_vento"],
    },

    {id: 'tiguan', 
    title: "Donde lo grande sucede", 
    title2: 'WOLKSWAGEN TIGUAN', 
    description: "Adem??s de estilo y tecnolog??a, el Tiguan Allspace le hace honor a su nombre ofreci??ndote m??s espacio para tus aventuras.", 
    thumbnail: [
      {img: tiguan_img1, desc: ''}, 
      {img: tiguan_img2, desc: 'Techo corredizo y deflector panor??mico de 1.364 mm de longitud equipado con molduras LED'}, 
      {img: tiguan_img3, desc: 'Sistema de tracci??n: 4Motion'}, 
      {img: tiguan_img4, desc: 'Pantalla retr??ctil transparente delante del parabrisas: Head Up Display'}
    ], 
    header: tiguanHeader, 
    ficha: [tiguanFT, "ficha_tec_tiguan"],
    },

    {id: 'touareg', 
    title: "Lider?? tu propio camino. Lleg?? a tu destino disfrutando el camino", 
    title2: 'WOLKSWAGEN TOUAREG', 
    description: "Cuando se trata de manejar tu Nuevo Touareg no hay tiempo que perder.", 
    thumbnail: [
      {img: touareg_img1, desc: ''}, 
      {img: touareg_img2, desc: 'Interior dise??ado especialmente para que disfrutes el espacio amplio'}, 
      {img: touareg_img3, desc: 'Sistema de desbloqueo: Keyless Access'}, 
      {img: touareg_img4, desc: 'Llantas de 19??? Esperance'}
    ], 
    header: touaregHeader, 
    ficha: [touaregFT, "ficha_tec_touareg"],
    },

    {id: 'saveiro', 
    title: "Somos lo que hacemos", 
    title2: 'WOLKSWAGEN SAVEIRO', 
    description: "Encontr?? en Saveiro un veh??culo de trabajo y aventurero gracias a su potencia", 
    thumbnail: [
      {img: saveiro_img1, desc: ''}, 
      {img: saveiro_img2, desc: 'El equipamiento m??s destacado de su segmento'}, 
      {img: saveiro_img3, desc: 'Vers??til y atractivo por fuera, c??modo y espacioso por dentro'}, 
      {img: saveiro_img4, desc: 'App Connect es un sistema que combina MirrorLink, CarPlay y Google AndroidAuto'}
    ], 
    header: saveiroHeader, 
    ficha: [saveiroFT, "ficha_tec_saveiro"],
    },

    {id: 'amarok', 
    title: "La pickup m??s potente del segmento", 
    title2: 'WOLKSWAGEN AMAROK', 
    description: "La nueva Amarok V6 con 258 caballos de potencia para seguir creando historia dentro de la industria automotriz.", 
    thumbnail: [
      {img: amarok_img1, desc: ''}, 
      {img: amarok_img2, desc: 'El motor que necesit??s'}, 
      {img: amarok_img3, desc: 'Volante multifuncion'}, 
      {img: amarok_img4, desc: 'ABS Off-road'}
    ], 
    header: amarokHeader, 
    ficha: [amarokFT, "ficha_tec_amarok"],
    },

    {id: 'wrangler', 
    title: "La pickup m??s potente del segmento", 
    title2: 'JEEP WRANGLER', 
    description: "El Wrangler ofrece desempe??o con elegancia lo que lo hace divertido de manejar", 
    thumbnail: [
      {img: wrangler_img1, desc: ''}, 
      {img: wrangler_img2, desc: 'Seguridad 4x4'}, 
      {img: wrangler_img3, desc: 'Pantalla Multimedia'}, 
      {img: wrangler_img4, desc: 'Sistema de tracci??n'}
    ], 
    header: wranglerHeader, 
    ficha: [wranglerFT, "ficha_tec_wrangler"],
    },

    {id: 'gladiator', 
    title: "Listo para llevarte a los lugares m??s desafiantes.", 
    title2: 'JEEP GLADIATOR', 
    description: "Jam??s existi?? un veh??culo como el Nuevo Jeep?? Gladiator, dise??ado desde todos sus ??ngulos para ser un completo todoterreno", 
    thumbnail: [
      {img: gladiator_img1, desc: ''}, 
      {img: gladiator_img2, desc: 'Control?? todo con el comando de voz con el sistema Uconnect'}, 
      {img: gladiator_img3, desc: 'Sistema de navegaci??n Uconnect?? 4C NAV con pantalla t??ctil'}, 
      {img: gladiator_img4, desc: 'Monitoreo de presi??n de neum??ticos'}
    ], 
    header: gladiatorHeader, 
    ficha: [gladiatorFT, "ficha_tec_gladiator"],
    },

    {id: 'commander', 
    title: "Una nueva dimensi??n para tu aventura", 
    title2: 'JEEP COMMANDER', 
    description: "Naturalmente sofisticado, el nuevo Jeep?? Commander te invita a descubrir nuevas aventuras", 
    thumbnail: [
      {img: commander_img1, desc: ''}, 
      {img: commander_img2, desc: 'Llantas de aleaci??n 18???'}, 
      {img: commander_img3, desc: 'Herramientas de asistencia a la conducci??n ADAS+'}, 
      {img: commander_img4, desc: '7 Airbags'}
    ], 
    header: commanderHeader, 
    ficha: [commanderFT, "ficha_tec_commander"],
    },

    {id: 'cherokee', 
    title: "Domina casi cualquier superficie, dentro y fuera del camino", 
    title2: 'JEEP CHEROKEE', 
    description: "Es f??cil reconocer de qu?? estamos hechos", 
    thumbnail: [
      {img: cherokee_img1, desc: ''}, 
      {img: cherokee_img2, desc: '5 modos de conducci??n diferentes'}, 
      {img: cherokee_img3, desc: 'Espacio amplio y encantador'}, 
      {img: cherokee_img4, desc: 'Kit de seguridad'}
    ], 
    header: cherokeeHeader, 
    ficha: [cherokeeFT, "ficha_tec_cherokee"],
    },

    {id: 'c5', 
    title: "Para un placer de conducci??n de alto nivel", 
    title2: 'CITRO??N C5 AIRCROSS', 
    description: "El SUV m??s modulable de su categor??a", 
    thumbnail: [
      {img: c5_img1, desc: ''}, 
      {img: c5_img2, desc: 'Motor naftero THP de alto rendimiento'}, 
      {img: c5_img3, desc: 'Volumen de ba??l "Best in class" de 580 L extendible hasta 720 L'}, 
      {img: c5_img4, desc: '3 asientos traseros individuales corredizos, rebatibles y con respaldo regulable en inclinaci??n'}
    ], 
    header: c5Header, 
    ficha: [c5FT, "ficha_tec_c5"],
    },

    {id: 'berlingo', 
    title: "Dise??o y seguridad de alto vuelo", 
    title2: 'CITRO??N BERLINGO MULTISPACE', 
    description: "El CITRO??N BERLINGO MULTISPACE demuestra que la belleza, el buen gusto y un atractivo innato pueden combinarse en un veh??culo multiuso de gran versatilidad.", 
    thumbnail: [
      {img: berlingo_img1, desc: ''}, 
      {img: berlingo_img2, desc: 'Interior XTR'}, 
      {img: berlingo_img3, desc: 'Acceso y ba??l de referencia'}, 
      {img: berlingo_img4, desc: 'Audio y conectividad'}
    ], 
    header: berlingoHeader, 
    ficha: [berlingoFT, "ficha_tec_berlingo"],
    },
]

const ModeloContainer = () => {
  const {modeloId} = useParams();

  return (
    <Modelo modelo={modelos.find(m => m.id === modeloId)}/>
  )
}

export default ModeloContainer