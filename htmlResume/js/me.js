'use strict';
jQuery( document ).ready( function ( $ ){
    var $name     = $( "#myName" ),
        $nt        = $( "#tglName" ),
        $btn     = $( ".btn" ),
        $t       = $( "t" ),
        h1Timer,
        isClicked = false,
        fontFam = new Array( "Arial, \"Helvetica Neue\", Helvetica, sans-serif",
                            "Arial Black, sans-serif",
                            "Comic Sans MS, cursive",
                            "Courier New, Courier, monospace",
                            "Georgia, serif",
                            "Impact, sans-serif",
                            "Lucida Sans Unicode, Lucida Grande, sans-serif",
                            "Lucida Console, Monaco, monospace",
                            "MS Serif, New York, serif",
                            "MS Sans Serif, Geneva, sans-serif",
                            "Palatino Linotype, Palatino, serif",
                            "Tahoma, Geneva, sans-serif",
                            "Times New Roman, Times, serif",
                            "Trebuchet MS, Helvetica, sans-serif",
                            "Verdana, Geneva, sans-serif",
                            "Symbol",
                            "Webdings",
                            "Zapf Dingbats" );

    $t.each(function(){
        $(this).after( tabIt( $(this).text() ) );
    });
//  name code
    $( "#cssCtrl" ).hide();
    $name.hide().fadeIn( 1000, function ()
    {
        $( "#cssCtrl" ).fadeIn( 1000 );
    });

    $nt.click( function ()
    {
        if( isClicked == false )
        {
            colorChngr();
            $( this ).text( "My cool char loop color changer toggle." );
            isClicked = true;
        }
        else
        {
            $name.text( $name.text() );
            clearTimeout( h1Timer );
            $( this ).text( "Click It Again!" );
            isClicked = false;
        }
    });
    $( "#sldrDivPos" ).change( function()
    {
        $( "#sldrDivPosVal" ).html( $( this ).val() );
        $( "#main" ).css( "margin-left", $( this ).val() + "em" );
    }).change();
    $( "#sldrDivW" ).change( function()
    {
        $( "#sldrDivWVal" ).html( $( this ).val() );
        $( "#main" ).css( "width", $( this ).val() + "em" );
    }).change();
    $( "#sldrFontFamily" ).change( function()
    {
        $( "#sldrFontFamVal" ).html( fontFam[ $( this ).val() ] );
        $( "#main" ).css( "font-family", fontFam[ $( this ).val() ] );
    }).change();
    $( "#sldrNameFontSize" ).change( function()
    {
        $( "#sldrNameFontSizeVal" ).html( $( this ).val() );
        $( "#main" ).css( "font-size", $( this ).val() + "em" );
    }).change();

    $( "#sldrMainBorderTLRadius1, #sldrMainBorderTLRadius2, #sldrMainBorderTRRadius1, #sldrMainBorderTRRadius2, " +
        "#sldrMainBorderBLRadius1, #sldrMainBorderBLRadius2, #sldrMainBorderBRRadius1, #sldrMainBorderBRRadius2" ).change( function(){
        var handle = (this.id),
            num1 = Number( handle.substr(-1,1) ),
            num2 = (num1 === 1)? 2: 1,
            vertical = handle.substr(-9,1),
            cssV = (vertical==="T")?"top":"bottom",
            horizontal = handle.substr(-8,1),
            cssH = (horizontal==="L")?"left":"right",
            r1 = $( this ).val(),
            r2 = $( "#sldrMainBorder" + vertical + horizontal + "Radius" + num2 + "Val" ).html();



        $( "#sldrMainBorder" + vertical + horizontal + "Radius" + num1 + "Val" ).html( r1 );
        $( "#sldrMainBorder" + vertical + horizontal + "Radius" + num2 + "Val" ).html( r2 );

        $( "#main" ).css( "border-" + cssV +"-"+ cssH + "-radius", String((num1 === 1)? r1: r2) + "em " + String((num1 === 1)? r2: r1) + "em" );

    }).change();

/*
NOTES

box-shadow: inset(optional) Horiz. Vert. Blur Spread rgba(Red, Green, Blue, Alpha);
box-shadow: 0.15em 0.15em 0.313em  #888888, inset -0.1em -0.1em 1em red, inset 0.1em 0.1em 1em red;
END NOTES
*/
    $( "div.bsMain > input" ).change(function(){
        var a="",b="",c="",d="",e="",f="",g="",h="",i="",j="",k="",l="",m="",n="",o="",p="",q="",r="",s="",t="",u="",v="",w="",x="",y="";
        a = ( this.id == "bs1H" ) ? $( this ).val() : $("#bs1HVal").html(); $("#bs1HVal").html(a);
        b = ( this.id == "bs1V" ) ? $( this ).val() : $("#bs1VVal").html(); $("#bs1VVal").html(b);
        c = ( this.id == "bs1B" ) ? $( this ).val() : $("#bs1BVal").html(); $("#bs1BVal").html(c);
        d = ( this.id == "bs1S" ) ? $( this ).val() : $("#bs1SVal").html(); $("#bs1SVal").html(d);
        e = ( this.id == "bs1Red" ) ? $( this ).val() : $("#bs1RedVal").html(); $("#bs1RedVal").html(e);
        f = ( this.id == "bs1Green" ) ? $( this ).val() : $("#bs1GreenVal").html(); $("#bs1GreenVal").html(f);
        g = ( this.id == "bs1Blue" ) ? $( this ).val() : $("#bs1BlueVal").html(); $("#bs1BlueVal").html(g);
        h = ( this.id == "bs1Alpha" ) ? $( this ).val() : $("#bs1AlphaVal").html(); $("#bs1AlphaVal").html(h);
        i = ( this.id == "bs2H" ) ? $( this ).val() : $("#bs2HVal").html(); $("#bs2HVal").html(i);
        j = ( this.id == "bs2V" ) ? $( this ).val() : $("#bs2VVal").html(); $("#bs2VVal").html(j);
        k = ( this.id == "bs2B" ) ? $( this ).val() : $("#bs2BVal").html(); $("#bs2BVal").html(k);
        l = ( this.id == "bs2S" ) ? $( this ).val() : $("#bs2SVal").html(); $("#bs2SVal").html(l);
        m = ( this.id == "bs2Red" ) ? $( this ).val() : $("#bs2RedVal").html(); $("#bs2RedVal").html(m);
        n = ( this.id == "bs2Green" ) ? $( this ).val() : $("#bs2GreenVal").html(); $("#bs2GreenVal").html(n);
        o = ( this.id == "bs2Blue" ) ? $( this ).val() : $("#bs2BlueVal").html(); $("#bs2BlueVal").html(o);
        p = ( this.id == "bs2Alpha" ) ? $( this ).val() : $("#bs2AlphaVal").html(); $("#bs2AlphaVal").html(p);
        q = ( this.id == "bs3H" ) ? $( this ).val() : $("#bs3HVal").html(); $("#bs3HVal").html(q);
        r = ( this.id == "bs3V" ) ? $( this ).val() : $("#bs3VVal").html(); $("#bs3VVal").html(r);
        s = ( this.id == "bs3B" ) ? $( this ).val() : $("#bs3BVal").html(); $("#bs3BVal").html(s);
        t = ( this.id == "bs3S" ) ? $( this ).val() : $("#bs3SVal").html(); $("#bs3SVal").html(t);
        u = ( this.id == "bs3Red" ) ? $( this ).val() : $("#bs3RedVal").html(); $("#bs3RedVal").html(u);
        v = ( this.id == "bs3Green" ) ? $( this ).val() : $("#bs3GreenVal").html(); $("#bs3GreenVal").html(v);
        w = ( this.id == "bs3Blue" ) ? $( this ).val() : $("#bs3BlueVal").html(); $("#bs3BlueVal").html(w);
        x = ( this.id == "bs3Alpha" ) ? $( this ).val() : $("#bs3AlphaVal").html(); $("#bs3AlphaVal").html(x);
        $( "#main" ).css( "box-shadow", ""+a+"em "+b+"em "+c+"em "+d+"em rgba("+e+", "+f+", "+g+", "+h+"),"
            +"inset "+i+"em "+j+"em "+k+"em "+l+"em rgba("+m+", "+n+", "+o+", "+p+"),"
            +"inset "+q+"em "+r+"em "+s+"em "+t+"em rgba("+u+", "+v+", "+w+", "+x+")");
    }).change();

    $( "#sldrMainBgRed, #sldrMainBgGreen, #sldrMainBgBlue, #sldrMainBgAlpha" ).change( function()
    {
        var red     = $( "#sldrMainBgRedVal" ).html(),
            green   = $( "#sldrMainBgGreenVal" ).html(),
            blue    = $( "#sldrMainBgBlueVal" ).html(),
            alpha   = $( "#sldrMainBgAlphaVal" ).html();
        if ( this.id == "sldrMainBgRed" )    red = $( this ).val();
        if ( this.id == "sldrMainBgGreen" )    green = $( this ).val();
        if ( this.id == "sldrMainBgBlue" )    blue = $( this ).val();
        if ( this.id == "sldrMainBgAlpha" )    alpha = $( this ).val();
        $( "#sldrMainBgRedVal" ).html( red );
        $( "#sldrMainBgGreenVal" ).html( green );
        $( "#sldrMainBgBlueVal" ).html( blue );
        $( "#sldrMainBgAlphaVal" ).html( alpha );
        $( "#main" ).css( "background-color", "rgba(" + red + "," + green + "," + blue + "," + alpha + ")" );

    }).change();

//  END h1 code

//  box toggle
    $btn.next().hide( 1000 );
    $btn.click( function ()
    {

        if( $( this ).next().css( "display" ) == "block" || $( this ).next().css( "display" ) == "inline" || $( this ).next().css( "display" ) == "inline-block" )
        {
            $( this ).next().hide( 1000 );
        }
        else
        {
            $( this ).siblings( "p" ).each( function()
            {
                $( this ).siblings( "p" ).hide( 1000 );
            });
            $(this ).next().show( 1500 );
        }
    });
//  END box toggle

// jQuery FUNCTIONS
function colorChngr()
{
    var oldText = $name.text(),
        newText = "";

    for ( var i = 0; i < oldText.length; i++ )
    {
        newText += oldText.charAt(i)
        .fontcolor( "#" + hexIt() + hexIt() + hexIt() + hexIt() + hexIt() + hexIt() );
    }

    $name.empty();
    $name.append( newText );
    h1Timer = setTimeout( colorChngr, 100 );
}

});//  END jQuery

//  FUNCTIONS


function hexIt(){
    var hex = "";
    for( var i = 0; i < 6; i++ )
    {
        var temp = randRange( 0, 15 );

             if( temp === 15 )  hex += "F";
        else if( temp === 14 )  hex += "E";
        else if( temp === 13 )  hex += "D";
        else if( temp === 12 )  hex += "C";
        else if( temp === 11 )  hex += "B";
        else if( temp === 10 )  hex += "A";
        else                    hex += String( temp );
    }
    return hex;
}

function randRange( low, high ){
    low     = Number( low ),
    high    = Number( high );
    var num = low - high;
    while ( num < low || num > high ){
        num = Math.ceil( ( Math.random() * ( -high * 2 ) ) + high );
    }
    return num;
}

function tabIt( x ){
    var tab = "";
    for( var i = 0; i < ( Number( x ) * 4 ); i++ )
        tab += "&nbsp;";
    return tab;
}

function printa( x ){ alert( x );           }
function printc( x ){ console.log( x );     }
function printd( x ){ document.write( x );  }