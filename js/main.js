/* General */
function stats_general(info){
	// stats for "General" stats
	
	switch(info.cs_s_cat + "-" + info.cs_s_a){
		// Kpsule Charge
		case "VIEW" + "-" + "VIEW":
			var objValue = parseInt( $("#GENERAL-KPSULE-CHARGE").text() );
			$("#GENERAL-KPSULE-CHARGE").text( objValue + 1 );
			break;
			
		//CLICK
		case "CLICK" + "-" + "CLICK":
			var objValue = parseInt( $("#GENERAL-CLIC").text() );
			$("#GENERAL-CLIC").text( objValue + 1 );
			break;		

		case "EXPAND" + "-" + "ADS_EXPAND":
		//case "FIRSTEXPAND" + "-" + "ADS_FIRSTEXPAND":	
			var objValue = parseInt( $("#GENERAL-ENGAGEMENT").text() );
			$("#GENERAL-ENGAGEMENT").text( objValue + 1 );
			break;	

		//Adhesion
		//case "ENGAGE" + "-" + "ADS_ENGAGE":
		case "FIRSTENGAGE" + "-" + "ADS_FIRSTENGAGE":		
			var objValue = parseInt( $("#GENERAL-ADHESION").text() );
			$("#GENERAL-ADHESION").text( objValue + 1 );
			break;	

		//Impressions
		case "PRINT" + "-" + "PRINT":		
			var objValue = parseInt( $("#GENERAL-IMPRESSION").text() );
			$("#GENERAL-IMPRESSION").text( objValue + 1 );
			break;	

		//Overture de section
		case "OPEN_SECTION" + "-" + "TEASER_SECTION":
		case "OPEN_SECTION" + "-" + "CUSTOM_SECTION":
		case "OPEN_SECTION" + "-" + "VIDEOS_SECTION":
		case "OPEN_SECTION" + "-" + "PHOTOS_SECTION":
		case "OPEN_SECTION" + "-" + "NEWS_SECTION":
		case "OPEN_SECTION" + "-" + "FULLTEXT_SECTION":
		case "OPEN_SECTION" + "-" + "LINKS_SECTION":
		case "OPEN_SECTION" + "-" + "CARDS_SECTION":
		case "OPEN_SECTION" + "-" + "EVENT_SECTION":
		case "OPEN_SECTION" + "-" + "AUDIO_SECTION":
		case "OPEN_SECTION" + "-" + "CONTACTS_SECTION":
		case "OPEN_SECTION" + "-" + "TWITTER_SECTION":
		case "OPEN_SECTION" + "-" + "MAILINGLIST_SECTION":
		case "OPEN_SECTION" + "-" + "BONUSFILE_SECTION":
		case "OPEN_SECTION" + "-" + "PRODUCTS_SECTION":		
			var objValue = parseInt( $("#GENERAL-OUVERTURE-DE-SECTION").text() );
			$("#GENERAL-OUVERTURE-DE-SECTION").text( objValue + 1 );
			break;	
			
		//Contenu	
		case "OPEN_CONTENT" + "-" + "TEASER_VIEW":	
		case "OPEN_CONTENT" + "-" + "VARIABLES SELON L'EVENEMENT":	
		case "OPEN_CONTENT" + "-" + "CUSTOM_SECTION_VIEW":	
		case "OPEN_CONTENT" + "-" + "VIDEOS_VIEW":
		case "OPEN_CONTENT" + "-" + "PHOTOS_LISTVIEW":
		case "OPEN_CONTENT" + "-" + "PHOTOS_VIEW":
		case "OPEN_CONTENT" + "-" + "NEWS_LISTVIEW":
		case "OPEN_CONTENT" + "-" + "NEWS_VIEW":
		case "OPEN_CONTENT" + "-" + "FULLTEXT_VIEW":
		case "OPEN_CONTENT" + "-" + "CARDS_VIEW":
		case "OPEN_CONTENT" + "-" + "CARDS_TEXTE":
		case "OPEN_CONTENT" + "-" + "CARDS_LINKS":
		case "OPEN_CONTENT" + "-" + "CARDS_LISTVIEW":
		case "OPEN_CONTENT" + "-" + "EVENT_VIEW":
		case "DOWNLOAD" + "-" + "EVENT_DATE":
		case "OPEN_CONTENT" + "-" + "EVENT_LISTVIEW":
		case "OPEN_CONTENT" + "-" + "AUDIO_PLAY":
		case "OPEN_CONTENT" + "-" + "CONTACTS_VIEW":
		case "OPEN_CONTENT" + "-" + "TWITTER_ACCOUNTVIEW":
		case "OPEN_CONTENT" + "-" + "BONUSFILE_VIEW":
		case "OPEN_CONTENT" + "-" + "MAILINGLIST_VIEW":
		case "OPEN_CONTENT" + "-" + "PRODUCTS_VIEW":
		case "OPEN_CONTENT" + "-" + "PRODUCTS_LISTVIEW":
		case "OPEN_CONTENT" + "-" + "PRODUCTS_PHOTO":		
			var objValue = parseInt( $("#GENERAL-CONTENU").text() );
			$("#GENERAL-CONTENU").text( objValue + 1 );
			break;		

		//Partage
		case "SHARE" + "-" + "ADS_SHARETWITTER":		
		case "SHARE" + "-" + "ADS_SHAREGOOGLE":		
		case "SHARE" + "-" + "ADS_SHAREFACEBOOK":		
		case "SHARE" + "-" + "ADS_SHAREMAIL":		
		case "SHARE" + "-" + "ADS_SHAREOTHER":			
		case "SHARE" + "-" + "SHARE_OTHER":			
		case "SHARE" + "-" + "SHARE_TWITTER":			
		case "SHARE" + "-" + "SHARE_OPENMAIL":			
		case "SHARE" + "-" + "SHARE_GOOGLE":			
		case "SHARE" + "-" + "SHARE_FACEBOOK":			
		case "SHARE" + "-" + "SHARE_SHARELINK":			
		case "SHARE" + "-" + "SHARE_SHAREEMBED":				
		case "SHARE" + "-" + "SHARE_MAIL":					
		case "SHARE" + "-" + "VIDEOS_SHAREFACEBOOK":					
		case "SHARE" + "-" + "VIDEOS_SHARETWITTER":					
		case "SHARE" + "-" + "VIDEOS_SHAREGOOGLE":					
		case "SHARE" + "-" + "VIDEOS_SHAREOTHER":					
		case "SHARE" + "-" + "VIDEOS_SHAREMAIL":					
		case "SHARE" + "-" + "VIDEOS_SHARELINK":					
		case "SHARE" + "-" + "VIDEOS_SHAREEMBED":					
		case "SHARE" + "-" + "VIDEOS_SHAREOPENMAIL":					
		case "SHARE" + "-" + "PHOTOS_SHAREFACEBOOK":					
		case "SHARE" + "-" + "PHOTOS_SHARETWITTER":					
		case "SHARE" + "-" + "PHOTOS_SHAREGOOGLE":					
		case "SHARE" + "-" + "PHOTOS_SHAREOTHER":					
		case "SHARE" + "-" + "PHOTOS_SHAREMAIL":					
		case "SHARE" + "-" + "PHOTOS_SHARELINK":					
		case "SHARE" + "-" + "PHOTOS_SHAREEMBED":					
		case "SHARE" + "-" + "PHOTOS_SHAREOPENMAIL":				
		case "SHARE" + "-" + "NEWS_SHAREFACEBOOK":		
		case "SHARE" + "-" + "NEWS_SHARETWITTER":					
		case "SHARE" + "-" + "NEWS_SHAREGOOGLE":					
		case "SHARE" + "-" + "NEWS_SHAREOTHER":					
		case "SHARE" + "-" + "NEWS_SHAREMAIL":
		case "SHARE" + "-" + "NEWS_SHARELINK":					
		case "SHARE" + "-" + "NEWS_SHAREEMBED":				
		case "SHARE" + "-" + "NEWS_SHAREOPENMAIL":				
		case "SHARE" + "-" + "FULLTEXT_SHAREFACEBOOK":				
		case "SHARE" + "-" + "FULLTEXT_SHARETWITTER":				
		case "SHARE" + "-" + "FULLTEXT_SHAREGOOGLE":				
		case "SHARE" + "-" + "FULLTEXT_SHAREOTHER":				
		case "SHARE" + "-" + "FULLTEXT_SHAREMAIL":				
		case "SHARE" + "-" + "FULLTEXT_SHARELINK":				
		case "SHARE" + "-" + "FULLTEXT_SHAREEMBED":				
		case "SHARE" + "-" + "FULLTEXT_SHAREOPENMAIL":	
		case "SHARE" + "-" + "CARDS_SHAREFACEBOOK":				
		case "SHARE" + "-" + "CARDS_SHARETWITTER":				
		case "SHARE" + "-" + "CARDS_SHAREGOOGLE":				
		case "SHARE" + "-" + "CARDS_SHAREOTHER":				
		case "SHARE" + "-" + "CARDS_SHAREMAIL":				
		case "SHARE" + "-" + "CARDS_SHARELINK":				
		case "SHARE" + "-" + "CARDS_SHAREEMBED":				
		case "SHARE" + "-" + "CARDS_SHAREOPENMAIL":
		case "SHARE" + "-" + "EVENT_SHAREFACEBOOK":				
		case "SHARE" + "-" + "EVENT_SHARETWITTER":				
		case "SHARE" + "-" + "EVENT_SHAREGOOGLE":				
		case "SHARE" + "-" + "EVENT_SHAREOTHER":				
		case "SHARE" + "-" + "EVENT_SHAREMAIL":				
		case "SHARE" + "-" + "EVENT_SHARELINK":				
		case "SHARE" + "-" + "EVENT_SHAREEMBED":				
		case "SHARE" + "-" + "EVENT_SHAREOPENMAIL":
		case "SHARE" + "-" + "AUDIO_SHAREFACEBOOK":				
		case "SHARE" + "-" + "AUDIO_SHARETWITTER":				
		case "SHARE" + "-" + "AUDIO_SHAREGOOGLE":				
		case "SHARE" + "-" + "AUDIO_SHAREOTHER":				
		case "SHARE" + "-" + "AUDIO_SHAREMAIL":				
		case "SHARE" + "-" + "AUDIO_SHARELINK":				
		case "SHARE" + "-" + "AUDIO_SHAREEMBED":				
		case "SHARE" + "-" + "AUDIO_SHAREOPENMAIL":	
		case "SHARE" + "-" + "PRODUCTS_SHAREFACEBOOK":				
		case "SHARE" + "-" + "PRODUCTS_SHARETWITTER":				
		case "SHARE" + "-" + "PRODUCTS_SHAREGOOGLE":				
		case "SHARE" + "-" + "PRODUCTS_SHAREOTHER":				
		case "SHARE" + "-" + "PRODUCTS_SHAREMAIL":				
		case "SHARE" + "-" + "PRODUCTS_SHARELINK":				
		case "SHARE" + "-" + "PRODUCTS_SHAREEMBED":				
		case "SHARE" + "-" + "PRODUCTS_SHAREOPENMAIL":		
			var objValue = parseInt( $("#GENERAL-PARTAGE").text() );
			$("#GENERAL-PARTAGE").text( objValue + 1 );
			break;		

		//Lien externe
		case "EXTERNAL_LINK" + "-" + "SECTIONLINK":
		case "EXTERNAL_LINK" + "-" + "TITLELINK":
		case "EXTERNAL_LINK" + "-" + "EXTERNAL_LINK":
		case "EXTERNAL_LINK" + "-" + "CUSTOM":
		case "CLOSE" + "-" + "VIDEOS_CLOSE":
		case "EXTERNAL_LINK" + "-" + "NEWS_LINK":
		case "EXTERNAL_LINK" + "-" + "NEWS_GLOBALLINK":
		case "EXTERNAL_LINK" + "-" + "FULLTEXT_LINK":
		case "EXTERNAL_LINK" + "-" + "LINKS_LINK":
		case "EXTERNAL_LINK" + "-" + "CARDS_LINK":
		case "EXTERNAL_LINK" + "-" + "EVENT_LINK":
		case "EXTERNAL_LINK" + "-" + "EVENT_RESA":
		case "EXTERNAL_LINK" + "-" + "EVENT_FBEVENT":
		case "EXTERNAL_LINK" + "-" + "AUDIO_LINK":
		case "EXTERNAL_LINK" + "-" + "AUDIO_ALBUMSHOP":
		case "EXTERNAL_LINK" + "-" + "AUDIO_TRACKSHOP":
		case "EXTERNAL_LINK" + "-" + "CONTACTS_WEBSITE":
		case "EXTERNAL_LINK" + "-" + "CONTACTS_MAIL":
		case "EXTERNAL_LINK" + "-" + "TWITTER_VIEWTWEETS":
		case "EXTERNAL_LINK" + "-" + "TWITTER_AUTHORLINK":
		case "EXTERNAL_LINK" + "-" + "TWITTER_TWEETLINK":
		case "EXTERNAL_LINK" + "-" + "PRODUCTS_LINK":	
			var objValue = parseInt( $("#GENERAL-LIEN-EXTERNE").text() );
			$("#GENERAL-LIEN-EXTERNE").text( objValue + 1 );
			break;	

		//Fermeture Kpsule
		case "COLLAPSE" + "-" + "ADS_COLLAPSE":	
			var objValue = parseInt( $("#GENERAL-FERMETURE-KPSULE").text() );
			$("#GENERAL-FERMETURE-KPSULE").text( objValue + 1 ); 
			break;				
			
		//Fermeture section		
		case "CLOSE" + "-" + "TEASER_CLOSE":
		case "CLOSE" + "-" + "VIDEOS_CLOSE":
		case "CLOSE" + "-" + "PHOTOS_CLOSE":
		case "CLOSE" + "-" + "NEWS_CLOSE":
		case "CLOSE" + "-" + "FULLTEXT_CLOSE":
		case "OPEN_CONTENT" + "-" + "LINKS_VIEW":
		case "CLOSE" + "-" + "CARDS_CLOSE":
		case "CLOSE" + "-" + "EVENT_CLOSE":
		case "CLOSE" + "-" + "AUDIO_CLOSE":
		case "CLOSE" + "-" + "CONTACTS_CLOSE":
		case "CLOSE" + "-" + "TWITTER_CLOSE":
		case "CLOSE" + "-" + "MAILINGLIST_CLOSE":
		case "CLOSE" + "-" + "BONUSFILE_CLOSE":		
			var objValue = parseInt( $("#GENERAL-FERMETURE-SECTION").text() );
			$("#GENERAL-FERMETURE-SECTION").text( objValue + 1 ); 
			break;		
			
		default:
			break;	
	}
}

function stats_general_action(info){
	// display for stats of "General", only for the line of "Action"

	switch(info.cs_s_cat + "-" + info.cs_s_a){
		//Lien externe
		case "EXTERNAL_LINK" + "-" + "SECTIONLINK":
		case "EXTERNAL_LINK" + "-" + "TITLELINK":	
		case "SHARE" + "-" + "ADS_SHARETWITTER":
		case "SHARE" + "-" + "ADS_SHAREGOOGLE":		
		case "SHARE" + "-" + "ADS_SHAREFACEBOOK":		
		case "SHARE" + "-" + "ADS_SHAREMAIL":		
		case "SHARE" + "-" + "ADS_SHAREOTHER":	
		case "EXTERNAL_LINK" + "-" + "EXTERNAL_LINK":	
		case "OPEN_CONTENT" + "-" + "TEASER_VIEW":	
		case "SHARE" + "-" + "SHARE_OTHER":			
		case "SHARE" + "-" + "SHARE_TWITTER":			
		case "SHARE" + "-" + "SHARE_OPENMAIL":	
		case "SHARE" + "-" + "SHARE_GOOGLE":			
		case "SHARE" + "-" + "SHARE_FACEBOOK":	
		case "SHARE" + "-" + "SHARE_SHARELINK":			
		case "SHARE" + "-" + "SHARE_SHAREEMBED":				
		case "SHARE" + "-" + "SHARE_MAIL":	
		case "EXTERNAL_LINK" + "-" + "CUSTOM":
		case "OPEN_CONTENT" + "-" + "VARIABLES SELON L'EVENEMENT":	
		case "OPEN_CONTENT" + "-" + "CUSTOM_SECTION_VIEW":	
		case "FULLSCREEN" + "-" + "TEASER_FULLSCREEN":
		case "EXIT_FULLSCREEN" + "-" + "TEASER_EXITFULLSCREEN":		
		case "FULLSCREEN" + "-" + "VIDEOS_FULLSCREEN":
		case "EXIT_FULLSCREEN" + "-" + "VIDEOS_EXITFULLSCREEN":
		case "OPEN_CONTENT" + "-" + "VIDEOS_VIEW":
		case "SHARE" + "-" + "VIDEOS_SHAREFACEBOOK":					
		case "SHARE" + "-" + "VIDEOS_SHARETWITTER":					
		case "SHARE" + "-" + "VIDEOS_SHAREGOOGLE":					
		case "SHARE" + "-" + "VIDEOS_SHAREOTHER":					
		case "SHARE" + "-" + "VIDEOS_SHAREMAIL":					
		case "SHARE" + "-" + "VIDEOS_SHARELINK":					
		case "SHARE" + "-" + "VIDEOS_SHAREEMBED":					
		case "SHARE" + "-" + "VIDEOS_SHAREOPENMAIL":		
		case "OPEN_CONTENT" + "-" + "PHOTOS_LISTVIEW":
		case "OPEN_CONTENT" + "-" + "PHOTOS_VIEW":
		case "SHARE" + "-" + "PHOTOS_SHAREFACEBOOK":				
		case "SHARE" + "-" + "PHOTOS_SHARETWITTER":					
		case "SHARE" + "-" + "PHOTOS_SHAREGOOGLE":					
		case "SHARE" + "-" + "PHOTOS_SHAREOTHER":					
		case "SHARE" + "-" + "PHOTOS_SHAREMAIL":
		case "SHARE" + "-" + "PHOTOS_SHARELINK":					
		case "SHARE" + "-" + "PHOTOS_SHAREEMBED":				
		case "SHARE" + "-" + "PHOTOS_SHAREOPENMAIL":	
		case "OPEN_CONTENT" + "-" + "NEWS_LISTVIEW":	
		case "OPEN_CONTENT" + "-" + "NEWS_VIEW":
		case "EXTERNAL_LINK" + "-" + "NEWS_LINK":
		case "EXTERNAL_LINK" + "-" + "NEWS_GLOBALLINK":
		case "SHARE" + "-" + "NEWS_SHAREFACEBOOK":	
		case "SHARE" + "-" + "NEWS_SHARETWITTER":					
		case "SHARE" + "-" + "NEWS_SHAREGOOGLE":					
		case "SHARE" + "-" + "NEWS_SHAREOTHER":					
		case "SHARE" + "-" + "NEWS_SHAREMAIL":
		case "SHARE" + "-" + "NEWS_SHARELINK":					
		case "SHARE" + "-" + "NEWS_SHAREEMBED":				
		case "SHARE" + "-" + "NEWS_SHAREOPENMAIL":	
		case "EXTERNAL_LINK" + "-" + "FULLTEXT_LINK":
		case "OPEN_CONTENT" + "-" + "FULLTEXT_VIEW":		
		case "SHARE" + "-" + "FULLTEXT_SHAREFACEBOOK":				
		case "SHARE" + "-" + "FULLTEXT_SHARETWITTER":				
		case "SHARE" + "-" + "FULLTEXT_SHAREGOOGLE":				
		case "SHARE" + "-" + "FULLTEXT_SHAREOTHER":				
		case "SHARE" + "-" + "FULLTEXT_SHAREMAIL":				
		case "SHARE" + "-" + "FULLTEXT_SHARELINK":				
		case "SHARE" + "-" + "FULLTEXT_SHAREEMBED":				
		case "SHARE" + "-" + "FULLTEXT_SHAREOPENMAIL":	
		case "EXTERNAL_LINK" + "-" + "LINKS_LINK":
		case "OPEN_CONTENT" + "-" + "CARDS_VIEW":
		case "OPEN_CONTENT" + "-" + "CARDS_TEXTE":
		case "OPEN_CONTENT" + "-" + "CARDS_LINKS":
		case "EXTERNAL_LINK" + "-" + "CARDS_LINK":
		case "OPEN_CONTENT" + "-" + "CARDS_LISTVIEW":	
		case "SHARE" + "-" + "CARDS_SHAREFACEBOOK":				
		case "SHARE" + "-" + "CARDS_SHARETWITTER":				
		case "SHARE" + "-" + "CARDS_SHAREGOOGLE":				
		case "SHARE" + "-" + "CARDS_SHAREOTHER":				
		case "SHARE" + "-" + "CARDS_SHAREMAIL":				
		case "SHARE" + "-" + "CARDS_SHARELINK":				
		case "SHARE" + "-" + "CARDS_SHAREEMBED":				
		case "SHARE" + "-" + "CARDS_SHAREOPENMAIL":
		case "OPEN_CONTENT" + "-" + "EVENT_VIEW":
		case "DOWNLOAD" + "-" + "EVENT_DATE":	
		case "EXTERNAL_LINK" + "-" + "EVENT_LINK":
		case "EXTERNAL_LINK" + "-" + "EVENT_RESA":
		case "EXTERNAL_LINK" + "-" + "EVENT_FBEVENT":
		case "OPEN_CONTENT" + "-" + "EVENT_LISTVIEW":
		case "SHARE" + "-" + "EVENT_SHAREFACEBOOK":				
		case "SHARE" + "-" + "EVENT_SHARETWITTER":				
		case "SHARE" + "-" + "EVENT_SHAREGOOGLE":				
		case "SHARE" + "-" + "EVENT_SHAREOTHER":				
		case "SHARE" + "-" + "EVENT_SHAREMAIL":				
		case "SHARE" + "-" + "EVENT_SHARELINK":				
		case "SHARE" + "-" + "EVENT_SHAREEMBED":				
		case "SHARE" + "-" + "EVENT_SHAREOPENMAIL":
		case "OPEN_CONTENT" + "-" + "AUDIO_PLAY":
		case "EXTERNAL_LINK" + "-" + "AUDIO_LINK":
		case "EXTERNAL_LINK" + "-" + "AUDIO_ALBUMSHOP":
		case "EXTERNAL_LINK" + "-" + "AUDIO_TRACKSHOP":
		case "SHARE" + "-" + "AUDIO_SHAREFACEBOOK":				
		case "SHARE" + "-" + "AUDIO_SHARETWITTER":				
		case "SHARE" + "-" + "AUDIO_SHAREGOOGLE":				
		case "SHARE" + "-" + "AUDIO_SHAREOTHER":				
		case "SHARE" + "-" + "AUDIO_SHAREMAIL":				
		case "SHARE" + "-" + "AUDIO_SHARELINK":				
		case "SHARE" + "-" + "AUDIO_SHAREEMBED":				
		case "SHARE" + "-" + "AUDIO_SHAREOPENMAIL":	
		case "EXTERNAL_LINK" + "-" + "CONTACTS_WEBSITE":
		case "EXTERNAL_LINK" + "-" + "CONTACTS_MAIL":
		case "OPEN_CONTENT" + "-" + "CONTACTS_VIEW":
		case "EXTERNAL_LINK" + "-" + "TWITTER_VIEWTWEETS":
		case "FOLLOW" + "-" + "TWITTER_FOLLOW":
		case "EXTERNAL_LINK" + "-" + "TWITTER_AUTHORLINK":
		case "EXTERNAL_LINK" + "-" + "TWITTER_TWEETLINK":
		case "OPEN_CONTENT" + "-" + "TWITTER_ACCOUNTVIEW":
		case "OPEN_CONTENT" + "-" + "MAILINGLIST_VIEW":
		case "OPEN_CONTENT" + "-" + "BONUSFILE_VIEW":
		case "OPEN_CONTENT" + "-" + "PRODUCTS_VIEW":
		case "OPEN_CONTENT" + "-" + "PRODUCTS_LISTVIEW":
		case "OPEN_CONTENT" + "-" + "PRODUCTS_PHOTO":
		case "SHARE" + "-" + "PRODUCTS_SHAREFACEBOOK":				
		case "SHARE" + "-" + "PRODUCTS_SHARETWITTER":				
		case "SHARE" + "-" + "PRODUCTS_SHAREGOOGLE":				
		case "SHARE" + "-" + "PRODUCTS_SHAREOTHER":				
		case "SHARE" + "-" + "PRODUCTS_SHAREMAIL":				
		case "SHARE" + "-" + "PRODUCTS_SHARELINK":				
		case "SHARE" + "-" + "PRODUCTS_SHAREEMBED":				
		case "SHARE" + "-" + "PRODUCTS_SHAREOPENMAIL":
			var objValue = parseInt( $("#GENERAL-ACTION").text() );
			$("#GENERAL-ACTION").text( objValue + 1 );
			break;
		default:
			break;	
	}
}

/* Details */
function add_display_url( info, dom_id ){
	/* add and display URL */
	/* Lien Externe, etc. */
	
	// Liens Externe
	if( dom_id.indexOf("LIENEXTERNE") > -1 ){
		/* for liens externes */
		if( $("#"+ dom_id +"_URL").length == 0 ){
			// first time add
			var le_block = '<p class="de-sub-txt le_url" id="' + dom_id + '_URL"  title="'+ decodeURIComponent(info.cs_s_lbl) +'"  >' + decodeURIComponent(info.cs_s_lbl) + '</p>';
			$( le_block ).appendTo( "#" + dom_id + "_URL_DIV" );
		}else{
			// after replace
			$("#"+ dom_id +"_URL").text( decodeURIComponent(info.cs_s_lbl) );
		}	
	}
	
	// Others, add URL 
	var aid = info.cs_s_aid;
	var obj_xml = window.KPSULE_MAP[ aid ].data;
	
	// clickcommands, add URL if <cc>	
	var obj_cc_arr = $( obj_xml ).find("clickcommands").find("cc[tochange='" + decodeURIComponent(info.cs_s_lbl) + "']");
	$.each( obj_cc_arr, function( idx, val ){
		var obj_cc_href = $(val).attr("href");
		if( null != obj_cc_href){
			test_cc_repeated = $( "#" + dom_id + "_URL_DIV").find('p').text();
			if( test_cc_repeated.indexOf(obj_cc_href)<0 ){
				// not exist, create; 
				var cc_block = '<p class="de-sub-txt le_url" id="' + dom_id + '_URL' + idx + '"  title="'+ obj_cc_href +'"  > CC>> ' + obj_cc_href + '</p>';
				$(cc_block).appendTo( "#" + dom_id + "_URL_DIV" );	
			}
		}
	});
	
	// pixels, add URL if <pixels>
	var obj_pixel_action_arr = $( obj_xml ).find("pixel[action='" + info.cs_s_a + "']");
	$.each( obj_pixel_action_arr, function( idx, val ){
		var obj_pixel_action_url = $(val).attr("href");
		if( null != obj_pixel_action_url){
			test_p_repeated = $( "#" + dom_id + "_URL_DIV").find('p').text();
			if( test_p_repeated.indexOf(obj_pixel_action_url)<0 ){
				// not exist, create; 
				var pix_block = '<p class="de-sub-txt le_url" id="' + dom_id + '_URL' + idx + '"  title="'+ obj_pixel_action_url +'"  > PA>> ' + obj_pixel_action_url + '</p>';
				$( pix_block ).appendTo( "#" + dom_id + "_URL_DIV" );	
			}
		}	
	});
	
	// pixels, add URL if <pixels>
	var obj_pixel_cat_arr = $( obj_xml ).find("pixel[cat='" + info.cs_s_cat + "']");
	$.each( obj_pixel_cat_arr, function( idx, val ){
		var obj_pixel_cat_url = $(val).attr("href");
		if( null != obj_pixel_cat_url){
			test_p_repeated = $( "#" + dom_id + "_URL_DIV").find('p').text();
			if( test_p_repeated.indexOf(obj_pixel_cat_url)<0 ){
				var pix_block = '<p class="de-sub-txt le_url" id="' + dom_id + '_URL' + idx + '"  title="'+ obj_pixel_cat_url +'"  > PC>> ' + obj_pixel_cat_url + '</p>';
				$( pix_block ).appendTo( "#" + dom_id + "_URL_DIV" );	
			}
		}	
	});
}

function display_details( info, obj_id ){
	/* display the DETAILS block if there is any INFO object charged */
	
	// add URL if needed
	add_display_url(info, obj_id);
	$("#" + obj_id ).closest("tr").show();
	$("#" + obj_id ).closest("tr").next().show();
}

function create_block( info, block_name, obj_section_name, tr_color ){
	/* Create Dom for <Nom de la section> */

	// generate id for DOM : DETAILS + cs_c_a + Nom de La Section
	var dom_id =  "DETAILS_"  + block_name.toUpperCase().replace(/[^A-Z0-9]/gi,'') + "_" + obj_section_name.replace(/[^A-Z0-9]/gi,'');

	// check if DOM exist
	if($( "#" + dom_id ).length == 0){
		/* Not exist */
		$("#details-table tbody").append('\
		<tr class="'+ tr_color +'-tr nom-de-la-section">\
			<td>\
				<p class="de-txt">'+ block_name +'</p>\
				<div id="' + dom_id + '_URL_DIV"></div>\
				<p class="de-sub-txt" id="' + dom_id + '_NOM">'+ obj_section_name +'</p>\
			</td><td>\
				<p class="de-txt-nbr" id="' + dom_id + '">0</p>\
			</td>\
		</tr>\
		<tr class="nom-de-la-section">\
			<td colspan="2" ><hr></td>\
		</tr>');
	}
	
	// add URL if needed
	add_display_url(info, dom_id);

	// no matter exist or not, add calculation
	var objValue = parseInt( $( "#" + dom_id ).text() );
	$( "#" + dom_id ).text( objValue + 1 );	
	
	// keep ScrollBox
	var objDetails = document.getElementById("detials_tbody");
	objDetails.scrollTop = objDetails.scrollHeight;
	var objDetailsKpsule = document.getElementById("detials_kpsule_tbody");
	objDetailsKpsule.scrollTop = objDetailsKpsule.scrollHeight;
}

function parse_xml( info, block_name, tr_color ){
    /* parse URL to get the 'Nom de la Section' */

	// Get Section Name 
	var aid = info.cs_s_aid;
	var obj_xml = window.KPSULE_MAP[ aid ].data;
	
	if( String(info.cs_s_a).indexOf("TEASER") > -1 && String(info.cs_a_cat).indexOf("FULLSCREEN") == -1 ){
		// for "teaser"
		var obj_section_name = $( obj_xml ).find("nav").find("section[type='teaser']").attr("title").toUpperCase();	
		create_block( info, block_name, obj_section_name, tr_color );
	}else{
		// for the else
		if('cs_s_fpath' in info){
			// there is section id
			var eid = info.cs_s_fpath.split("/")[0];
			var ck_aid = /^\d+$/.test(aid);
			var ck_eid = /^\d+$/.test(eid);
			console.log("there is section id:");
			console.log( aid, "-", ck_aid, "    ", eid, "-", ck_eid);
			if( ck_eid && ck_aid ){
				// get < Nom de la Section > in XML
				var eid_array = info.cs_s_fpath.split("/");
				for( var i=0; i < eid_array.length; i++ ){
					if( /^\d+$/.test( eid_array[i] ) ){
						var test_section_name = $( obj_xml ).find("nav").find("section[eid='" + eid_array[i] + "']").attr("title");	
						if( test_section_name.length != 0 ){
							var obj_section_name = test_section_name.toUpperCase();
							create_block( info, block_name, obj_section_name, tr_color );
							break;
						}
					}
				}
			}
		}else{
			// no section id
			console.log("no section id:");
			// special case, for 'Liens Externe' of 'CUSTOM', if no section ID, put General
			if( String(info.cs_s_a).indexOf("CUSTOM") > -1 ){
				create_block( info, block_name, 'GENERAL', tr_color );
			}
		}
	}
}

function stats_detail_special(info){
	// special case: 'Nom de L'Action' when 'cs_s_a' is VARIABLES SELON L'ENVENEMENT

	if(info.cs_s_cat == "CUSTOM" || info.cs_s_cat == "OPEN_CONTENT"){
		if(info.cs_s_cat == "CUSTOM"){
			var tr_color = "gray";
		}else{
			var tr_color = "orange";
		}
		
		// Get Section Name 
		var aid = info.cs_s_aid;
		var obj_xml = window.KPSULE_MAP[ aid ].data;
		var eid = info.cs_s_fpath.split("/")[0];
		var ck_aid = /^\d+$/.test(aid);
		var ck_eid = /^\d+$/.test(eid);
		if( ck_eid && ck_aid ){
			var eid_array = info.cs_s_fpath.split("/");
			for( var i in eid_array ){
				if( /^\d+$/.test( eid_array[i] ) ){
					var test_section_name = $( obj_xml ).find("nav").find("section[eid='" + eid_array[i] + "']").attr("title").toUpperCase();	
					var obj_section_type = $( obj_xml ).find("nav").find("section[eid='" + eid_array[i] + "']").attr("type");	
					if( test_section_name.length != 0 && obj_section_type.toUpperCase() == "CUSTOM" ){
						var obj_section_name = test_section_name.toUpperCase();
						break;
					}
				}
			}
		}	
		// generate id for DOM : DETAILS + cs_c_a + Nom de La Section
		var obj_action_name = info.cs_s_a.toUpperCase().replace(/[^A-Z0-9]/gi,'');
		var dom_id =  "DETAILS_"  + obj_action_name + "_" + obj_section_name.replace(/[^A-Z0-9]/gi,'');
		
		// check if DOM exist
		if($( "#" + dom_id ).length == 0){
			/* Not exist */
			$("#details-table tbody").append('\
			<tr class="'+ tr_color +'-tr nom-de-la-section">\
				<td>\
					<p class="de-txt" id="' + dom_id + '_ACTION">'+ info.cs_s_a.replace(/-/g, ' ').replace(/_/g, ' ') +'</p>\
					<div id="' + dom_id + '_URL_DIV"></div>\
					<p class="de-sub-txt" id="' + dom_id + '_NOM">'+ obj_section_name +'</p>\
				</td><td>\
					<p class="de-txt-nbr" id="' + dom_id + '">0</p>\
				</td>\
			</tr>\
			<tr class="nom-de-la-section">\
				<td colspan="2" ><hr></td>\
			</tr>');
		}
		
		// add URL if needed
		add_display_url(info, dom_id);
	
		// if cs_s_cat is 'OPEN_CONTENT', add calculation for <General> Panel for 'CONTENU'
		if(info.cs_s_cat == "OPEN_CONTENT"){
			var objValueGeneral = parseInt( $("#GENERAL-CONTENU").text() );
			$("#GENERAL-CONTENU").text( objValueGeneral + 1 );
		}	
		
		// no matter exist or not, add calculation for other Panels
		var objValue = parseInt( $( "#" + dom_id ).text() );
		$( "#" + dom_id ).text( objValue + 1 );	
	}		
}

function stats_detail(info){
	// display for stats of action
	
	switch(info.cs_s_cat + "-" + info.cs_s_a){
		case "ENGAGE" + "-" + "ADS_ENGAGE":
			var objValue = parseInt( $("#DETAILS_ADHESION_GENERAL").text() );
			$("#DETAILS_ADHESION_GENERAL").text( objValue + 1 );
			display_details( info, "DETAILS_ADHESION_GENERAL");
			break;
			
		case "FIRSTENGAGE" + "-" + "ADS_FIRSTENGAGE":
			var objValue = parseInt( $("#DETAILS_ADHESION_UNIQUE_GENERAL").text() );
			$("#DETAILS_ADHESION_UNIQUE_GENERAL").text( objValue + 1 );
			display_details( info, "DETAILS_ADHESION_UNIQUE_GENERAL");
			break;
			
		case "CLICK" + "-" + "CLICK":
			var objValue = parseInt( $("#DETAILS_CLIC_GENERAL").text() );
			$("#DETAILS_CLIC_GENERAL").text( objValue + 1 );
			display_details( info, "DETAILS_CLIC_GENERAL");
			break;
			
		case "EXPAND" + "-" + "ADS_EXPAND":
			var objValue = parseInt( $("#DETAILS_ENGAGEMENT_GENERAL").text() );
			$("#DETAILS_ENGAGEMENT_GENERAL").text( objValue + 1 );
			display_details( info, "DETAILS_ENGAGEMENT_GENERAL");
			break;
			
		case "FIRSTEXPAND" + "-" + "ADS_FIRSTEXPAND":
			var objValue = parseInt( $("#DETAILS_ENGAGEMENT_UNIQUE_GENERAL").text() );
			$("#DETAILS_ENGAGEMENT_UNIQUE_GENERAL").text( objValue + 1 );
			display_details( info, "DETAILS_ENGAGEMENT_UNIQUE_GENERAL");
			break;
			
		case "SUSCRIBE" + "-" + "MAILINGLIST_SUBSCRIBE":
		case "SUSCRIBE" + "-" + "BONUSFILE_SUBSCRIBE":
			var objValue = parseInt( $("#DETAILS_ENVOI_DU_FORMULAIRE").text() );
			$("#DETAILS_ENVOI_DU_FORMULAIRE").text( objValue + 1 );
			parse_xml( info, "DETAILS_ENVOI_DU_FORMULAIRE", "gray" );
			break;
			
		case "COLLAPSE" + "-" + "ADS_COLLAPSE":
			var objValue = parseInt( $("#DETAILS_FERMETURE_DE_LA_BANNIERE_GENERAL").text() );
			$("#DETAILS_FERMETURE_DE_LA_BANNIERE_GENERAL").text( objValue + 1 );
			display_details( info, "DETAILS_FERMETURE_DE_LA_BANNIERE_GENERAL");
			break;
			
		case "CLOSE" + "-" + "AUDIO_CLOSE":
			parse_xml( info, "Fermeture du panneau", "violet" );
			break;
			
		case "FOLLOW" + "-" + "TWITTER_FOLLOW":
			parse_xml( info, "Follow", "gray" );
			break;
			
		case "PRINT" + "-" + "PRINT":
			var objValue = parseInt( $("#DETAILS_IMPRESSION_GENERAL").text() );
			$("#DETAILS_IMPRESSION_GENERAL").text( objValue + 1 );
			display_details( info, "DETAILS_IMPRESSION_GENERAL");
			break;
			
		case "VIEW" + "-" + "VIEW":
			var objValue = parseInt( $("#DETAILS_KPSULE_CHARGEE_GENERAL").text() );
			$("#DETAILS_KPSULE_CHARGEE_GENERAL").text( objValue + 1 );
			display_details( info, "DETAILS_KPSULE_CHARGEE_GENERAL");
			break;
			
		case "OPEN_CONTENT" + "-" + "TEASER_VIEW":
		case "OPEN_CONTENT" + "-" + "VIDEOS_VIEW":
		case "OPEN_CONTENT" + "-" + "AUDIO_PLAY":
			parse_xml( info, "Lecture", "orange" );
			break;
			
		case "PROGRESS" + "-" + "TEASER_25":
		case "PROGRESS" + "-" + "VIDEOS_25":
		case "PROGRESS" + "-" + "AUDIO_25":
			parse_xml( info, "Lecture a 25%", "gray" );
			break;
			
		case "PROGRESS" + "-" + "TEASER_50":
		case "PROGRESS" + "-" + "VIDEOS_50":
		case "PROGRESS" + "-" + "AUDIO_50":
			parse_xml( info, "Lecture a 50%", "gray" );
			break;
			
		case "PROGRESS" + "-" + "TEASER_75":
		case "PROGRESS" + "-" + "VIDEOS_75":
		case "PROGRESS" + "-" + "AUDIO_75":
			parse_xml( info, "Lecture a 75%", "gray" );
			break;
			
		case "PROGRESS" + "-" + "TEASER_COMPLETE":
		case "PROGRESS" + "-" + "VIDEOS_COMPLETE":
		case "PROGRESS" + "-" + "AUDIO_COMPLETE":
			parse_xml( info, "Lecture a 100%", "gray" );
			break;

	    // Lien Externe - GENERAL
		case "EXTERNAL_LINK" + "-" + "TITLELINK":
		case "EXTERNAL_LINK" + "-" + "EXTERNAL_LINK":
			var objValue = parseInt( $("#DETAILS_LIENEXTERNE_GENERAL").text() );
			$("#DETAILS_LIENEXTERNE_GENERAL").text( objValue + 1 );	
			display_details( info, "DETAILS_LIENEXTERNE_GENERAL" );
			break;
			
		// Lien externe - NOM DE LA SECTION
		case "EXTERNAL_LINK" + "-" + "SECTIONLINK":
		case "EXTERNAL_LINK" + "-" + "CUSTOM":
		case "EXTERNAL_LINK" + "-" + "NEWS_LINK":
		case "EXTERNAL_LINK" + "-" + "FULLTEXT_LINK":
		case "EXTERNAL_LINK" + "-" + "LINKS_LINK":
		case "EXTERNAL_LINK" + "-" + "CARDS_LINK":
		case "EXTERNAL_LINK" + "-" + "PRODUCTS_LINK":
			parse_xml( info, "Lien externe", "blue" );
			break;	
			
		case "EXTERNAL_LINK" + "-" + "NEWS_GLOBALLINK":
			parse_xml( info, "Lien externe global", "blue" );
			break;
			
		case "EXTERNAL_LINK" + "-" + "EVENT_LINK":
			parse_xml( info, "Lien externe - lien", "blue" );
			break;
			
		case "EXTERNAL_LINK" + "-" + "EVENT_RESA":
			parse_xml( info, "Lien externe - réservation", "blue" );
			break;	
			
		case "EXTERNAL_LINK" + "-" + "CONTACTS_MAIL":
			parse_xml( info, "Lien externe - mail", "blue" );
			break;	
			
		case "EXTERNAL_LINK" + "-" + "AUDIO_LINK":
			parse_xml( info, "Lien externe - lien général", "blue" );
			break;	
			
		case "EXTERNAL_LINK" + "-" + "AUDIO_ALBUMSHOP":
			parse_xml( info, "Lien externe - album", "blue" );
			break;	
			
		case "EXTERNAL_LINK" + "-" + "TWITTER_VIEWTWEETS":
			parse_xml( info, "Lien externe - page twitter", "blue" );
			break;	
			
		case "EXTERNAL_LINK" + "-" + "TWITTER_AUTHORLINK":
			parse_xml( info, "Lien externe - page auteur tweet", "blue" );
			break;	
			
		case "EXTERNAL_LINK" + "-" + "EVENT_FBEVENT":
			parse_xml( info, "Lien externe - évenement facebook", "blue" );
			break;
			
		case "EXTERNAL_LINK" + "-" + "AUDIO_TRACKSHOP":
			parse_xml( info, "Lien externe - track", "blue" );
			break;	
			
		case "EXTERNAL_LINK" + "-" + "CONTACTS_WEBSITE":
			parse_xml( info, "Lien externe - website", "blue" );
			break;
			
		case "EXTERNAL_LINK" + "-" + "TWITTER_TWEETLINK":
			parse_xml( info, "Lien externe - tweet", "blue" );
			break;			

		case "OPEN_SECTION" + "-" + "TEASER_SECTION":
		case "OPEN_SECTION" + "-" + "CUSTOM_SECTION":
		case "OPEN_SECTION" + "-" + "VIDEOS_SECTION":
		case "OPEN_SECTION" + "-" + "PHOTOS_SECTION":
		case "OPEN_SECTION" + "-" + "NEWS_SECTION":
		case "OPEN_SECTION" + "-" + "FULLTEXT_SECTION":
		case "OPEN_SECTION" + "-" + "LINKS_SECTION":
		case "OPEN_SECTION" + "-" + "CARDS_SECTION":
		case "OPEN_SECTION" + "-" + "EVENT_SECTION":
		case "OPEN_SECTION" + "-" + "CONTACTS_SECTION":
		case "OPEN_SECTION" + "-" + "TWITTER_SECTION":
		case "OPEN_SECTION" + "-" + "MAILINGLIST_SECTION":
		case "OPEN_SECTION" + "-" + "BONUSFILE_SECTION":
		case "OPEN_SECTION" + "-" + "PRODUCTS_SECTION":
			parse_xml( info, "Ouverture de section", "green" );
			break;		

		case "OPEN_SECTION" + "-" + "AUDIO_SECTION":	
			parse_xml( info, "Ouverture du panneau", "green" );
			break;	

		// Partage
		// Partage Twitter 
		case "SHARE" + "-" + "ADS_SHARETWITTER":
		case "SHARE" + "-" + "SHARE_TWITTER":
			var objValue = parseInt( $("#DETAILS_PARTAGE_TWITTER_GENERAL").text() );
			$("#DETAILS_PARTAGE_TWITTER_GENERAL").text( objValue + 1 );
			display_details( info, "DETAILS_PARTAGE_TWITTER_GENERAL");
			break;	

		case "SHARE" + "-" + "VIDEOS_SHARETWITTER":
		case "SHARE" + "-" + "PHOTOS_SHARETWITTER":
		case "SHARE" + "-" + "NEWS_SHARETWITTER":
		case "SHARE" + "-" + "FULLTEXT_SHARETWITTER":
		case "SHARE" + "-" + "CARDS_SHARETWITTER":
		case "SHARE" + "-" + "EVENT_SHARETWITTER":
		case "SHARE" + "-" + "AUDIO_SHARETWITTER":
		case "SHARE" + "-" + "PRODUCTS_SHARETWITTER":
			parse_xml( info, "Partage Twitter", "red" );
			break;
			
		// Partage Google	
		case "SHARE" + "-" + "ADS_SHAREGOOGLE":
		case "SHARE" + "-" + "SHARE_GOOGLE":
			var objValue = parseInt( $("#DETAILS_PARTAGE_GOOGLE_GENERAL").text() );
			$("#DETAILS_PARTAGE_GOOGLE_GENERAL").text( objValue + 1 );
			display_details( info, "DETAILS_PARTAGE_GOOGLE_GENERAL");
			break;			

		case "SHARE" + "-" + "VIDEOS_SHAREGOOGLE":
		case "SHARE" + "-" + "PHOTOS_SHAREGOOGLE":
		case "SHARE" + "-" + "NEWS_SHAREGOOGLE":
		case "SHARE" + "-" + "FULLTEXT_SHAREGOOGLE":
		case "SHARE" + "-" + "CARDS_SHAREGOOGLE":
		case "SHARE" + "-" + "EVENT_SHAREGOOGLE":
		case "SHARE" + "-" + "AUDIO_SHAREGOOGLE":
		case "SHARE" + "-" + "PRODUCTS_SHAREGOOGLE":
			parse_xml( info, "Partage Google", "red" );
			break;				
		
		// Partage Facebook
		case "SHARE" + "-" + "ADS_SHAREFACEBOOK":
		case "SHARE" + "-" + "SHARE_FACEBOOK":
			var objValue = parseInt( $("#DETAILS_PARTAGE_FACEBOOK_GENERAL").text() );
			$("#DETAILS_PARTAGE_FACEBOOK_GENERAL").text( objValue + 1 );
			display_details( info, "DETAILS_PARTAGE_FACEBOOK_GENERAL");
			break;		

		case "SHARE" + "-" + "VIDEOS_SHAREFACEBOOK":
		case "SHARE" + "-" + "PHOTOS_SHAREFACEBOOK":
		case "SHARE" + "-" + "NEWS_SHAREFACEBOOK":
		case "SHARE" + "-" + "FULLTEXT_SHAREFACEBOOK":
		case "SHARE" + "-" + "CARDS_SHAREFACEBOOK":
		case "SHARE" + "-" + "EVENT_SHAREFACEBOOK":
		case "SHARE" + "-" + "AUDIO_SHAREFACEBOOK":
		case "SHARE" + "-" + "PRODUCTS_SHAREFACEBOOK":
			parse_xml( info, "Partage Facebook", "red" );
			break;			
			
		// PARTAGE Mail 	
		case "SHARE" + "-" + "ADS_SHAREMAIL":
		case "SHARE" + "-" + "SHARE_OPENMAIL":
			var objValue = parseInt( $("#DETAILS_PARTAGE_MAIL_GENERAL").text() );
			$("#DETAILS_PARTAGE_MAIL_GENERAL").text( objValue + 1 );
			display_details( info, "DETAILS_PARTAGE_MAIL_GENERAL");
			break;		
		
		case "SHARE" + "-" + "VIDEOS_SHAREOPENMAIL":
		case "SHARE" + "-" + "PHOTOS_SHAREOPENMAIL":
		case "SHARE" + "-" + "NEWS_SHAREOPENMAIL":
		case "SHARE" + "-" + "FULLTEXT_SHAREOPENMAIL":
		case "SHARE" + "-" + "CARDS_SHAREOPENMAIL":
		case "SHARE" + "-" + "EVENT_SHAREOPENMAIL":
		case "SHARE" + "-" + "AUDIO_SHAREOPENMAIL":
		case "SHARE" + "-" + "PRODUCTS_SHAREOPENMAIL":
			parse_xml( info, "Partage Mail", "red" );
			break;			

		// PARTAGE Mail Send 	
		case "SHARE" + "-" + "SHARE_MAIL":
			var objValue = parseInt( $("#DETAILS_PARTAGE_MAIL_SEND_GENERAL").text() );
			$("#DETAILS_PARTAGE_MAIL_SEND_GENERAL").text( objValue + 1 );
			display_details( info, "DETAILS_PARTAGE_MAIL_SEND_GENERAL");
			break;			
		
		case "SHARE" + "-" + "VIDEOS_SHAREMAIL":
		case "SHARE" + "-" + "PHOTOS_SHAREMAIL":
		case "SHARE" + "-" + "NEWS_SHAREMAIL":
		case "SHARE" + "-" + "FULLTEXT_SHAREMAIL":
		case "SHARE" + "-" + "CARDS_SHAREMAIL":
		case "SHARE" + "-" + "EVENT_SHAREMAIL":
		case "SHARE" + "-" + "AUDIO_SHAREMAIL":
		case "SHARE" + "-" + "PRODUCTS_SHAREMAIL":
			parse_xml( info, "Partage Mail Send", "red" );
			break;				
		
		// Partage Autre
		case "SHARE" + "-" + "ADS_SHAREOTHER":
		case "SHARE" + "-" + "SHARE_OTHER":
			var objValue = parseInt( $("#DETAILS_PARTAGE_AUTRE_GENERAL").text() );
			$("#DETAILS_PARTAGE_AUTRE_GENERAL").text( objValue + 1 );
			display_details( info, "DETAILS_PARTAGE_AUTRE_GENERAL");
			break;

		case "SHARE" + "-" + "VIDEOS_SHAREOTHER":
		case "SHARE" + "-" + "PHOTOS_SHAREOTHER":
		case "SHARE" + "-" + "NEWS_SHAREOTHER":
		case "SHARE" + "-" + "FULLTEXT_SHAREOTHER":
		case "SHARE" + "-" + "CARDS_SHAREOTHER":
		case "SHARE" + "-" + "EVENT_SHAREOTHER":
		case "SHARE" + "-" + "AUDIO_SHAREOTHER":
		case "SHARE" + "-" + "PRODUCTS_SHAREOTHER":
			parse_xml( info, "Partage Autre", "red" );
			break;			
			
		// PARTAGE Link
		case "SHARE" + "-" + "VIDEOS_SHARELINK":
		case "SHARE" + "-" + "PHOTOS_SHARELINK":
		case "SHARE" + "-" + "NEWS_SHARELINK":
		case "SHARE" + "-" + "FULLTEXT_SHARELINK":
		case "SHARE" + "-" + "CARDS_SHARELINK":
		case "SHARE" + "-" + "EVENT_SHARELINK":
		case "SHARE" + "-" + "AUDIO_SHARELINK":
		case "SHARE" + "-" + "PRODUCTS_SHARELINK":		
		case "SHARE" + "-" + "SHARE_SHARELINK":		
			parse_xml( info, "Partage Link", "red" );
			break;						

		// Partage Embed	
		case "SHARE" + "-" + "VIDEOS_SHAREEMBED":
		case "SHARE" + "-" + "PHOTOS_SHAREEMBED":
		case "SHARE" + "-" + "NEWS_SHAREEMBED":
		case "SHARE" + "-" + "FULLTEXT_SHAREEMBED":
		case "SHARE" + "-" + "CARDS_SHAREEMBED":
		case "SHARE" + "-" + "EVENT_SHAREEMBED":
		case "SHARE" + "-" + "AUDIO_SHAREEMBED":
		case "SHARE" + "-" + "PRODUCTS_SHAREEMBED":
		case "SHARE" + "-" + "SHARE_SHAREEMBED":
			parse_xml( info, "Partage Embed", "red" );
			break;		

		case "FULLSCREEN" + "-" + "TEASER_FULLSCREEN":
		case "FULLSCREEN" + "-" + "VIDEOS_FULLSCREEN":
		case "FULLSCREEN" + "-" + "PHOTOS_FULLSCREEN":
			parse_xml( info, "Passage en fullscreen", "gray" );
			break;	

		case "RETWEET" + "-" + "TWITTER_RETWEET":	
			parse_xml( info, "Retweet", "gray" );
			break;	

		case "REPLY" + "-" + "TWITTER_REPLY":
			parse_xml( info, "Reply", "gray" );
			break;	

		case "EXIT_FULLSCREEN" + "-" + "TEASER_EXITFULLSCREEN":
		case "EXIT_FULLSCREEN" + "-" + "VIDEOS_EXITFULLSCREEN":	
			parse_xml( info, "Sortir du fullscreen", "gray" );
			break;	

		case "DOWNLOAD" + "-" + "PHOTOS_DOWNLOAD":	
			parse_xml( info, "Téléchargement de photo", "gray" );
			break;	

		case "DOWNLOAD" + "-" + "EVENT_DATE":
			parse_xml( info, "Téléchargement d'un evenement", "gray" );
			break;	

		case "DOWNLOAD" + "-" + "CONTACTS_DOWNLOAD":
			parse_xml( info, "Téléchargement d'un contact", "gray" );
			break;	

		case "EXTERNAL_LINK" + "-" + "EVENT_MAP":
		case "OPEN_CONTENT" + "-" + "EVENT_SHOWMAP":
			parse_xml( info, "Voir la carte", "gray" );
			break;		

		case "OPEN_CONTENT" + "-" + "CUSTOM_SECTION_VIEW":
		case "OPEN_CONTENT" + "-" + "FULLTEXT_VIEW":
		case "OPEN_CONTENT" + "-" + "CONTACTS_VIEW":
		case "OPEN_CONTENT" + "-" + "MAILINGLIST_VIEW":
		case "OPEN_CONTENT" + "-" + "BONUSFILE_VIEW":
			parse_xml( info, "Vue de la section", "orange" );
			break;		

		case "OPEN_CONTENT" + "-" + "PHOTOS_LISTVIEW":
		case "OPEN_CONTENT" + "-" + "NEWS_LISTVIEW":
		case "OPEN_CONTENT" + "-" + "CARDS_LISTVIEW":
		case "OPEN_CONTENT" + "-" + "EVENT_LISTVIEW":
		case "OPEN_CONTENT" + "-" + "PRODUCTS_LISTVIEW":		
			parse_xml( info, "Vue de la liste", "orange" );
			break;		

		case "OPEN_CONTENT" + "-" + "PHOTOS_VIEW":
		case "OPEN_CONTENT" + "-" + "PRODUCTS_PHOTO":	
			parse_xml( info, "Vue d'une photo", "orange" );
			break;		

		case "OPEN_CONTENT" + "-" + "NEWS_VIEW":
			parse_xml( info, "Vue d'une news", "orange" );
			break;		

		case "OPEN_CONTENT" + "-" + "CARDS_VIEW":	
			parse_xml( info, "Vue d'une fiche", "orange" );
			break;		

		case "OPEN_CONTENT" + "-" + "CARDS_TEXTE":
			parse_xml( info, "Vue de la page texte", "orange" );
			break;	
			
		case "OPEN_CONTENT" + "-" + "CARDS_LINKS":
			parse_xml( info, "Vue de la page liens", "orange" );
			break;	
			
		case "OPEN_CONTENT" + "-" + "TWITTER_ACCOUNTVIEW":	
			parse_xml( info, "Vue d'un compte Twitter", "orange" );
			break;	
			
		case "OPEN_CONTENT" + "-" + "PRODUCTS_VIEW":
			parse_xml( info, "Vue d'un produit", "orange" );
			break;	
			
		case "OPEN_CONTENT" + "-" + "EVENT_VIEW":	
			parse_xml( info, "Vue evenement / lieu", "orange" );
			break;		
			
		case "EXIT_FULLSCREEN" + "-" + "PHOTOS_EXITFULLSCREEN":
			parse_xml( info, "Sortir du fullscreen", "gray" );
			break;		
			
		default:
			break;	
	}
}


/* Details Kpsule */
function stats_details_kpsule(info){
	// display for stats of action
	
	// add template
	var each_block_head = ' <tr class="de-kp-open"><td>\
								<p class="ge-ta-txt pull-left ge-ta-txt-up">Action : ' + info.cs_s_a + '</p>\
								<p class="ge-ta-txt pull-left ge-ta-txt-down">Categore : ' + info.cs_s_cat + '</p>\
							</td><td>\
								<img class="de-kp-opn" src="images/plus.jpg" alt="open" />\
								<img class="de-kp-hid" src="images/moins.jpg" style="display:none;" alt="hide" />\
							</td></tr>\
							<tr class="de-kp-hide"><td colspan="2" ><hr></td></tr>\
							<tr class="de-kp-hide"><td colspan="2">';
	var each_block_foot = ' </td></tr>\
						    <tr>\
								<td colspan="2"><hr></td>\
							</tr>';
							
	// add each node
	for( k in info ){
		var each_node = '<p class="de-kp-var" >'+ k +' : '+ info[k] +'</p>';
		each_block_head += each_node;
	}
	$( each_block_head + each_block_foot ).appendTo( "table#details-kpsule-table tbody" );
	
	$(".de-kp-hid").click(function(){
		//hide
		$(this).hide();
		$(this).closest("tr").next().hide();
		$(this).closest("tr").next().next().hide();
		//change display icon
		$(this).prev().show();
		//return css
		$(this).closest("tr").css("background-color", "#231f20");
		$(this).parent().prev().find("p").css("background-color", "#231f20").css("color","#c8c8c8");
	});
	$(".de-kp-opn").click(function(){
		//open
		$(this).next().show();
		$(this).closest("tr").next().show();
		$(this).closest("tr").next().next().show();
		// change display icon
		$(this).hide();
		//change css
		$(this).closest("tr").css("background-color", "#a6a8ab");
		$(this).parent().prev().find("p").css("background-color", "#a6a8ab").css("color","#fff");
	});
	
	// general css update
	$(".de-kp-hid").each(function(){
		if($(this).css("display") == "none"){
			// change display icon
			$(this).hide();
			$(this).prev().show();
			// open
			$(this).closest("tr").next().hide();
			$(this).closest("tr").next().next().hide();
			// change css
			$(this).closest("tr").css("background-color", "#231f20");
			$(this).parent().prev().find("p").css("background-color", "#231f20").css("color","#c8c8c8");
		}else{
			// change display icon
			$(this).prev().hide();			
			$(this).show();
			// hide			
			$(this).closest("tr").next().show();
			$(this).closest("tr").next().next().show();
			// return css
			$(this).closest("tr").css("background-color", "#a6a8ab");
			$(this).parent().prev().find("p").css("background-color", "#a6a8ab").css("color","#fff");
		}
	});
}

function stats_timers( info ) {
	// If the global namespace is defined, let's update the timers display
	if ( typeof window.kps !== "undefined" ) {
		for ( var key in kps.timers ) {
	    	( function( timer ) {
	    		timer.html( info[ key.substring( 1 ) ] );
	    	} )( kps.timers[ key ] );
	    }
	}	
};

/* Function Else */
function default_css_events(){
	/* default display for events */	
	$("#events-opn,#details,#details-kpsule,.de-kp-hid,.nom-de-la-section, #details-table tr").hide();
}

function default_css_timers(){
	/* default display for timers */
    $("#timers-opn").hide();

    // Define a global object with all timers JQuery shortcuts
    var kps = {
    	timers: {
    		$global: $( "#timer_global" ),
    		$expo: $( "#timer_expo" ),
    		$expand: $( "#timer_expand" ),
    		$dwell: $( "#timer_dwell" ),
    		$first_expand: $( "#timer_first_expand" )
    	}
    };

    // Reset all timer values
    for ( var key in kps.timers ) {
    	( function( timer ) {
    		timer.html( "00:00" );
    	} )( kps.timers[ key ] );
    }

    // Set the KPS object in global context
    window.kps = window.kps || kps;
}

function capitalise_first_letter(string){
	/* make the first letter of a string upper-case */
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function trackEvent( info ) {
	// charge realtime data and display on html
	// If the info object contains timers info, let's display them
	if ( typeof info.timers !== "undefined" ) {
		stats_timers( info );
	}else{
		console.log(info);
		stats_general(info);
		stats_general_action(info);
		stats_detail(info);
		stats_detail_special(info);
		stats_details_kpsule(info);
	}
}

$(document).ready(function(){

	// set default 
	default_css_events();
	default_css_timers();
	
	// tooltip popup for url
	$( document ).tooltip();
	
	/* click and change */
	// events
	$("#events-cls").click(function(){
		//close
		$("#ge-de-dek,#ge-de-dek-tr,#general,#details,#details-kpsule,#events-cls").hide();
		// change display icon
		$("#events-opn").show();
	});
	$("#events-opn").click(function(){
		$("#ge-de-dek,#ge-de-dek-tr,#general,#details,#details-kpsule,#events-cls").show();
		default_css_events();
		// change display icon
		$("#events-opn").hide();
	});
	// general
	$("#ge-dsp").click(function(){
		//display
		$("#general").show();
		//hide
		$("#details,#details-kpsule").hide();
		//all details kpsule closed
		$(".de-kp-hid").hide();
		$(".de-kp-opn").show();	
		$(".de-kp-open").css("background-color", "#231f20");
		$(".de-kp-open").find("p").css("background-color", "#231f20").css("color","#c8c8c8");
	});
	
	// details
	$("#de-dsp").click(function(){
		//display
		$("#details").show();
		//hide
		$("#general,#details-kpsule").hide();
		$(".de-kp-hid").hide();
		$(".de-kp-opn").show();
		$(".de-kp-open").css("background-color", "#231f20");
		$(".de-kp-open").find("p").css("background-color", "#231f20").css("color","#c8c8c8");

		// display block if it's not none
		$("#details_tbody tr").each(function(){
			var e_de_val = $(this).find(".de-txt-nbr").text();
			if( parseInt(e_de_val) > 0 ){
				$(this).show();	
				$(this).next().show();
			}
		});
	});
	
	// details kpsule
	$("#dek-dsp").click(function(){
		//display
		$("#details-kpsule").show();
		$(".de-kp-hid").hide();
		$(".de-kp-opn").show();
		//hide
		$("#general,#details,.de-kp-hide").hide();
	});
	
	// timer detials
	$("#timers-cls").click(function(){
		//close
		$("#timers-detail,#timers-cls").hide();
		// change display icon
		$("#timers-opn").show();
	});
	$("#timers-opn").click(function(){
		$("#timers-detail,#timers-cls").show();
		// change display icon
		$("#timers-opn").hide();
	});

	$("#ctl-cls").click(function(){
		$("#control-stats").remove();
	});
});
