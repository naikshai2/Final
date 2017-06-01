	
	function isMonth(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
	
	
	
	
	
	function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
	
	
	
	function isNumber(evt, element) {

        var charCode = (evt.which) ? evt.which : event.keyCode

        if (
            (charCode != 46 || $(element).val().indexOf('.') != -1 || charCode == 45) &&      // ?.? CHECK DOT, AND ONLY ONE.
            (charCode < 48 || charCode > 57))
            return false;

        return true;
    }  

	
	function isNumberss() {

        //var charCode = (evt.which) ? evt.which : event.keyCode

	}
	
	
    
    function calcutation(){
		
		var c6=$("#c6").val();
		c6=round(c6, 2);
		var d6=c6;
		$("#d6").val(c6);
		 $("#tt_d6").html(numberWithCommas(c6));
		
		
		var f6=$("#f6").val();
		f6=round(f6, 2);
		var g6=f6;
		$("#g6").val(f6);
		 $("#tt_g6").html(numberWithCommas(f6));
		 
		 
		 var c7=$("#c7").val();
		c7=round(c7, 2);
		 
		 var d7=round((c6*c7)/100,2);
		 $("#d7").val(d7);
		 $("#tt_d7").html(numberWithCommas(d7));
		 
		
		
		var f7=$("#f7").val();
		f7=round(f7, 2);
		 
		 var g7=round((f6*f7)/100,2);
		 $("#g7").val(g7);
		 $("#tt_g7").html(numberWithCommas(g7));
		
		
		var d8=round((parseFloat(c6)-parseFloat(d7)),2);
		 $("#d8").val(d8);
		 $("#tt_d8").html(numberWithCommas(d8));
		 
		 
		 var g8=round((parseFloat(f6)-parseFloat(g7)),2);
		 $("#g8").val(g8);
		 $("#tt_g8").html(numberWithCommas(g8));
		 
		 
		 
		 var c8_2=$("#c8_2").val();
		c8_2=round(c8_2, 2);
		var d8_2=c8_2;
		$("#d8_2").val(c8_2);
		 $("#tt_d8_2").html(numberWithCommas(c8_2));
		 
		 
		 
			var c9=$("#c9").val();
		c9=round(c9, 2);
		var d9=c9;
		$("#d9").val(c9);
		 $("#tt_d9").html(numberWithCommas(c9));
		
		
		var f9=$("#f9").val();
		f9=round(f9, 2);
		var g9=f9;
		$("#g9").val(f9);
		 $("#tt_g9").html(numberWithCommas(f9));
		 
		 
		 
		  var c12=$("#c12").val();
		c12=round(c12, 2);
		 
		 var d12=round((c6*c12)/100,2);
		 $("#d12").val(d12);
		 $("#tt_d12").html(numberWithCommas(d12));
		 
		 
		 
		 
		 var f12=$("#f12").val();
		f12=round(f12, 2);
		 
		 var g12=round((f9*f12)/100,2);
		 $("#g12").val(g12);
		 $("#tt_g12").html(numberWithCommas(g12));
		
		
		
		
		 var c13=$("#c13").val();
		c13=round(c13, 2);
		 
		 var d13=round((d7*c13)/100,2);
		 $("#d13").val(d13);
		 $("#tt_d13").html(numberWithCommas(d13));
		 
		 
		 
		 
		 var f13=$("#f13").val();
		f13=round(f13, 2);
		 
		 var g13=round((g7*f13)/100,2);
		 $("#g13").val(g13);
		 $("#tt_g13").html(numberWithCommas(g13));
		
		
		
		var c14=$("#c14").val();
		c14=round(c14, 2);
		d14=c14;
		$("#d14").val(c14);
		 $("#tt_d14").html(numberWithCommas(c14));
		
		
		var f14=$("#f14").val();
		f14=round(f14, 2);
		g14=f14;
		$("#g14").val(f14);
		 $("#tt_g14").html(numberWithCommas(f14));
		 
		 
		 
		 var b15=$("#b15").val();
		 var e15=$("#e15").val();
		 
		 var c15=$("#c15").val();
		
		  var d15=((d7/12))*b15;
		 d15=round((d15*c15)/100,2);
		
		 $("#d15").val(d15);
		 $("#tt_d15").html(numberWithCommas(d15));
		 
		 
		 
		 
		  var f15=$("#f15").val();
		  var g15=((g7/12))*e15;
		 g15=round((g15*f15)/100,2);
		 $("#g15").val(g15);
		 $("#tt_g15").html(numberWithCommas(g15));
		 
		 
		 var b16=b15;
		 var e16=e15;
		 
		$("#b16").val(b16);
		 $("#tt_b16").html(b16); 
		 
		 $("#e16").val(e16);
		 $("#tt_e16").html(e16); 
		 
		 var c16=$("#c16").val();
		c16=round(c16, 2);
		
		
		 var d16=((c16/1200))*b16*c8_2;
		 d16=round((d16),2);
		 
		 
		
		
		 $("#d16").val(d16);
		 $("#tt_d16").html(numberWithCommas(d16));
		
		
		 var f16=$("#f16").val();
		f16=round(f16, 2);
		
		
		 var g16=((e16/12))*f6;
		 g16=round((g16*f16)/100,2);
		
		 $("#g16").val(g16);
		 $("#tt_g16").html(numberWithCommas(g16));
		
		
		
		
		
		var c17=$("#c17").val();
		c17=round(c17, 2);
		 
		 var d17=round((c9*c17)/100,2);
		 $("#d17").val(d17);
		 $("#tt_d17").html(numberWithCommas(d17));
		 
		
		
		var f17=$("#f17").val();
		f17=round(f17, 2);
		 
		 var g17=round((f9*f17)/100,2);
		 $("#g17").val(g17);
		 $("#tt_g17").html(numberWithCommas(g17));
		
		
		
		
		
		var c18=$("#c18").val();
		c18=round(c18, 2);
		 
		 var d18=round((c9*c18)/100,2);
		 $("#d18").val(d18);
		 $("#tt_d18").html(numberWithCommas(d18));
		 
		
		
		var f18=$("#f18").val();
		f18=round(f18, 2);
		 
		 var g18=round((f9*f18)/100,2);
		 $("#g18").val(g18);
		 $("#tt_g18").html(numberWithCommas(g18));
		
		
		
		
		
		var c19=$("#c19").val();
		c19=round(c19, 2);
		 
		 var d19=round((c9*c19)/100,2);
		 $("#d19").val(d19);
		 $("#tt_d19").html(numberWithCommas(d19));
		 
		
		
		var f19=$("#f19").val();
		f19=round(f19, 2);
		 
		 var g19=round((f9*f19)/100,2);
		 $("#g19").val(g19);
		 $("#tt_g19").html(numberWithCommas(g19));
		
		
		
		
		var b20=b15;
		 var e20=e15;
		
		
		$("#b20").val(b20);
		 $("#tt_b20").html(b20); 
		 
		 $("#e20").val(e20);
		 $("#tt_e20").html(e20); 
		
		var c20=$("#c20").val();
		c20=round(c20, 2);
		
		var d20=round(((c20/1200)*b20*c9),2);
		 $("#d20").val(d20);
		 $("#tt_d20").html(numberWithCommas(d20));
		
		
		var f20=$("#f20").val();
		f20=round(f20, 2);
		
		
		var g20=round(((f20/1200)*e20*f9),2);
		 $("#g20").val(g20);
		 $("#tt_g20").html(numberWithCommas(g20));
		
		
		
		
		
		var c21=$("#c21").val();
		c21=round(c21, 2);
		var d21=round(c21, 2);
		$("#d21").val(d21);
		 $("#tt_d21").html(numberWithCommas(d21));
		
		
		var f21=$("#f21").val();
		f21=round(f21, 2);
		g21=f21;
		$("#g21").val(f21);
		 $("#tt_g21").html(numberWithCommas(f21));
		
		
		
		
		var b22=b15;
		 var e22=e15;
		
		
		$("#b22").val(b22);
		 $("#tt_b22").html(b22); 
		 
		 $("#e22").val(e22);
		 $("#tt_e22").html(e22); 
		
		var c22=$("#c22").val();
		c22=round(c22, 2);
		
		var d22=round((c22*b22),2);
		 $("#d22").val(d22);
		 $("#tt_d22").html(numberWithCommas(d22));
		
		
		var f22=$("#f22").val();
		f22=round(f22, 2);
		
		
		var g22=round((f22*e22),2);
		 $("#g22").val(g22);
		 $("#tt_g22").html(numberWithCommas(g22));
		
		
		
		
		var c23=$("#c23").val();
		c23=round(c23, 2);
		
		var d23=c23;
		$("#d23").val(c23);
		 $("#tt_d23").html(numberWithCommas(c23));
		
		
		var f23=$("#f23").val();
		f23=round(f23, 2);
		var g23=f23;
		$("#g23").val(f23);
		 $("#tt_g23").html(numberWithCommas(f23));
		 
		 
		 var c24=$("#c24").val();
		c24=round(c24, 2);
		var d24=c24;
		$("#d24").val(c24);
		 $("#tt_d24").html(numberWithCommas(c24));
		
		
		var f24=$("#f24").val();
		f24=round(f24, 2);
		
		var g24=f24;
		$("#g24").val(f24);
		 $("#tt_g24").html(numberWithCommas(f24));
		
		
		var d25=round((parseFloat(d12)+parseFloat(d13)+parseFloat(d14)+parseFloat(d15)+parseFloat(d16)+parseFloat(d17)+parseFloat(d18)+parseFloat(d19)+parseFloat(d20)+parseFloat(d21)+parseFloat(d22)+parseFloat(d23)-parseFloat(d24)),2);
		
		$("#d25").val(d25);
		 $("#tt_d25").html(numberWithCommas(d25));
		 
		 
		 
		 var g25=round((parseFloat(g12)+parseFloat(g13)+parseFloat(g14)+parseFloat(g15)+parseFloat(g16)+parseFloat(g17)+parseFloat(g18)+parseFloat(g19)+parseFloat(g20)+parseFloat(g21)+parseFloat(g22)+parseFloat(g23)+parseFloat(g24)),2);
		
		$("#g25").val(g25);
		 $("#tt_g25").html(numberWithCommas(g25));
		 
		 
		 
		 
		var d26=round((parseFloat(d9)-parseFloat(d6)-parseFloat(d25)),2);
		
		$("#d26").val(d26);
		 $("#tt_d26").html(numberWithCommas(d26));
		 
		 var g26=round((parseFloat(g9)-parseFloat(g6)-parseFloat(g25)),2);
		
		$("#g26").val(g26);
		 $("#tt_g26").html(numberWithCommas(g26));
		 
		 
		 
		 
		 
		 var d27=round((parseFloat(d25)+parseFloat(d8)),2);
		
		$("#d27").val(d27);
		 $("#tt_d27").html(numberWithCommas(d27));
		 
		 var g27=round((parseFloat(g8)+parseFloat(g25)),2);
		
		$("#g27").val(g27);
		 $("#tt_g27").html(numberWithCommas(g27));
		 
		 
		 
		 
	 var d28=round((d26/(parseFloat(d8)+parseFloat(d25))),2);
		d28=d28*100;
		d28=round(d28, 3);
		$("#d28").val(d28);
		 $("#tt_d28").html(numberWithCommas(d28));
		 
		 var g28=round((g26/(parseFloat(g8)+parseFloat(g25))),2);
		g28=g28*100;
		$("#g28").val(g28);
		 $("#tt_g28").html(numberWithCommas(g28));	 
		 
		 
		
		
		
		
		 var d29=round((d28*12)/b15,2);
		//d29=d29;
		$("#d29").val(d29);
		 $("#tt_d29").html(numberWithCommas(d29));
		 
		 var g29=round((g28*12)/e15,2);
		g29=g29*100;
		$("#g29").val(g29);
		 $("#tt_g29").html(numberWithCommas(g29));	 
		
		
		
		
		
		var c32=$("#c32").val();
		c32=round(c32, 2);
		
		var d32=round((c6*c32)/100,2);
		 $("#d32").val(d32);
		 $("#tt_d32").html(numberWithCommas(d32));
		
		
		var f32=$("#f32").val();
		f32=round(f32, 2);
		
		
		var g32=round((f6*f32)/100,2);
		 $("#g32").val(g32);
		 $("#tt_g32").html(numberWithCommas(g32));
		
		
		
		
		
		
		var d33=round((parseFloat(d9)-parseFloat(d25)-parseFloat(d32)),2);
		
		$("#d33").val(d33);
		 $("#tt_d33").html(numberWithCommas(d33));
		 
		 var g33=round((parseFloat(g9)-parseFloat(g25)-parseFloat(g32)),2);
		
		$("#g33").val(g33);
		 $("#tt_g33").html(numberWithCommas(g33));	 
		
		
	
	
	var d34=round(d32/(parseFloat(d8)+parseFloat(d25)),2);
		d34=d34*100;
		d34=round(d34,3);
		$("#d34").val(d34);
		 $("#tt_d34").html(numberWithCommas(d34));
		 
		 
		 
		
		 
		 
		 
		 
		 
		 
		 
		 var g34=round(g32/(parseFloat(g8)+parseFloat(g25)),2);
		g34=g34*100;
		
		g34=round(g34,3);
		
		$("#g34").val(g34);
		 $("#tt_g34").html(numberWithCommas(g34));	 
		
		
	}
