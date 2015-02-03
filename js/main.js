/* General */
function stats_general(info){
	// stats for "General" stats
	
	switch(info.cs_s_cat + "-" + info.cs_s_a){
		// Kpsule Charge
		case "VIEW" + "-" + "VIEW":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "--------VIEW----------------------");
			var objValue = parseInt( $("#GENERAL-KPSULE-CHARGE").text() );
			$("#GENERAL-KPSULE-CHARGE").text( objValue + 1 );
			break;
			
		//CLICK
		case "CLICK" + "-" + "CLICK":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "--------CLICK----------------------");
			var objValue = parseInt( $("#GENERAL-CLIC").text() );
			$("#GENERAL-CLIC").text( objValue + 1 );
			break;		
			
		//Fermeture section
		case "CLOSE" + "-" + "TEASER_CLOSE":	
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "--------Lien Externe----------------------");			
			var objValue = parseInt( $("#GENERAL-FERMETURE-KPSULE").text() );
			$("#GENERAL-FERMETURE-KPSULE").text( objValue + 1 );
			break;	

		//Engagement
		case "EXPAND" + "-" + "ADS_EXPAND":
		case "FIRSTEXPAND" + "-" + "ADS_FIRSTEXPAND":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "--------Engagement----------------------");			
			var objValue = parseInt( $("#GENERAL-ENGAGEMENT").text() );
			$("#GENERAL-ENGAGEMENT").text( objValue + 1 );
			break;	

		//Adhesion
		case "ENGAGE" + "-" + "ADS_ENGAGE":
		case "FIRSTENGAGE" + "-" + "ADS_FIRSTENGAGE":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "--------Adhesion----------------------");			
			var objValue = parseInt( $("#GENERAL-ADHESION").text() );
			$("#GENERAL-ADHESION").text( objValue + 1 );
			break;	

		//Impressions
		case "PRINT" + "-" + "PRINT":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "--------Impressions----------------------");			
			var objValue = parseInt( $("#GENERAL-IMPRESSION").text() );
			$("#GENERAL-IMPRESSION").text( objValue + 1 );
			break;	

		//Overture de section
		case "OPEN_SECTION" + "-" + "TEASER_SECTION":
		case "OPEN_SECTION" + "-" + "CUSTOM_SECTION":
		case "OPEN_SECTION" + "-" + "VIDEOS_SECTION":
		case "OPEN_SECTION" + "-" + "PHOTOS_SECTION":
		case "OPEN_SECTION" + "-" + "FULLTEXT_SECTION":
		case "OPEN_SECTION" + "-" + "LINKS_SECTION":
		case "OPEN_SECTION" + "-" + "CARDS_SECTION":
		case "OPEN_SECTION" + "-" + "EVENT_SECTION":
		case "OPEN_SECTION" + "-" + "AUDIO_SECTION":
		case "OPEN_SECTION" + "-" + "CONTACTS_SECTION":
		case "OPEN_SECTION" + "-" + "TWITTER_SECTION":
		case "OPEN_SECTION" + "-" + "MAILINGLIST_SECTION":
		case "OPEN_SECTION" + "-" + "PRODUCTS_SECTION":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "--------Overture de section----------------------");			
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
		case "OPEN_CONTENT" + "-" + "PRODUCTS_VIEW":
		case "OPEN_CONTENT" + "-" + "PRODUCTS_LISTVIEW":
		case "OPEN_CONTENT" + "-" + "PRODUCTS_PHOTO":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "--------Contenu----------------------");			
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
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "--------Partage----------------------");			
			var objValue = parseInt( $("#GENERAL-PARTAGE").text() );
			$("#GENERAL-PARTAGE").text( objValue + 1 );
			break;		

		//Lien externe
		case "EXTERNAL_LINK" + "-" + "SECTIONLINK":
		case "EXTERNAL_LINK" + "-" + "TITLELINK":
		case "EXTERNAL_LINK" + "-" + "EXTERNAL_LINK":
		case "EXTERNAL_LINK" + "-" + "CUSTOM":
		case "CLOSE" + "-" + "VIDEOS_CLOSE":
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
			console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "-------- Lien externe ----------------------");			
			var objValue = parseInt( $("#GENERAL-LIEN-EXTERNE").text() );
			$("#GENERAL-LIEN-EXTERNE").text( objValue + 1 );
			break;		

		//Fermeture section
		case "COLLAPSE" + "-" + "ADS_COLLAPSE":
		case "CLOSE" + "-" + "TEASER_CLOSE":
		case "CLOSE" + "-" + "VIDEOS_CLOSE":
		case "CLOSE" + "-" + "PHOTOS_CLOSE":
		case "CLOSE" + "-" + "FULLTEXT_CLOSE":
		case "OPEN_CONTENT" + "-" + "LINKS_VIEW":
		case "CLOSE" + "-" + "CARDS_CLOSE":
		case "CLOSE" + "-" + "EVENT_CLOSE":
		case "CLOSE" + "-" + "AUDIO_CLOSE":
		case "CLOSE" + "-" + "CONTACTS_CLOSE":
		case "CLOSE" + "-" + "TWITTER_CLOSE":
		case "CLOSE" + "-" + "MAILINGLIST_CLOSE":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "--------Fermeture section----------------------");			
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
		//Contenu
		case "OPEN_CONTENT" + "-" + "TEASER_VIEW":	
		case "OPEN_CONTENT" + "-" + "VARIABLES SELON L'EVENEMENT":	
		case "OPEN_CONTENT" + "-" + "CUSTOM_SECTION_VIEW":	
		case "OPEN_CONTENT" + "-" + "VIDEOS_VIEW":
		case "OPEN_CONTENT" + "-" + "PHOTOS_LISTVIEW":
		case "OPEN_CONTENT" + "-" + "PHOTOS_VIEW":
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
		case "OPEN_CONTENT" + "-" + "PRODUCTS_VIEW":
		case "OPEN_CONTENT" + "-" + "PRODUCTS_LISTVIEW":
		case "OPEN_CONTENT" + "-" + "PRODUCTS_PHOTO":
		//Else
		case "CUSTOM" + "-" + "VARIABLES SELON L'EVENEMENT":		
		case "FULLSCREEN" + "-" + "TEASER_FULLSCREEN":
		case "EXIT_FULLSCREEN" + "-" + "TEASER_EXITFULLSCREEN":
		case "FULLSCREEN" + "-" + "VIDEOS_FULLSCREEN":
		case "EXIT_FULLSCREEN" + "-" + "VIDEOS_EXITFULLSCREEN":
		case "FOLLOW" + "-" + "TWITTER_FOLLOW":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "--------------", Action, "----------------");
			var objValue = parseInt( $("#GENERAL-ACTION").text() );
			$("#GENERAL-ACTION").text( objValue + 1 );
			break;
		default:
			break;	
	}
}

/* Details */
function stats_detail(info){
	// display for stats of action
	
	switch(info.cs_s_cat + "-" + info.cs_s_a){
		case "ENGAGE" + "-" + "ADS_ENGAGE":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-ADHESION").text() );
			$("#DETAILS-ADHESION").text( objValue + 1 );
			break;
			
		case "FIRSTENGAGE" + "-" + "ADS_FIRSTENGAGE":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-ADHESION-UNIQUE").text() );
			$("#DETAILS-ADHESION-UNIQUE").text( objValue + 1 );
			break;
			
		case "CLICK" + "-" + "CLICK":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-CLIC").text() );
			$("#DETAILS-CLIC").text( objValue + 1 );
			break;
			
		case "EXPAND" + "-" + "ADS_EXPAND":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-ENGAGEMENT").text() );
			$("#DETAILS-ENGAGEMENT").text( objValue + 1 );
			break;
			
		case "FIRSTEXPAND" + "-" + "ADS_FIRSTEXPAND":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-ENGAGEMENT-UNIQUE").text() );
			$("#DETAILS-ENGAGEMENT-UNIQUE").text( objValue + 1 );
			break;
			
		case "SUSCRIBE" + "-" + "MAILINGLIST_SUBSCRIBE":
		case "SUSCRIBE" + "-" + "BONUSFILE_SUBSCRIBE":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-ENVOI-DU-FORMULAIRE").text() );
			$("#DETAILS-ENVOI-DU-FORMULAIRE").text( objValue + 1 );
			break;
			
		case "COLLAPSE" + "-" + "ADS_COLLAPSE":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-FERMETURE-DE-LA-BANNIERE").text() );
			$("#DETAILS-FERMETURE-DE-LA-BANNIERE").text( objValue + 1 );
			break;
			
		case "CLOSE" + "-" + "AUDIO_CLOSE":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-FERMETURE-DU-PANNEAU").text() );
			$("#DETAILS-FERMETURE-DU-PANNEAU").text( objValue + 1 );
			break;
			
		case "CLOSE" + "-" + "TEASER_CLOSE":
		case "CLOSE" + "-" + "PHOTOS_CLOSE":
		case "CLOSE" + "-" + "NEWS_CLOSE":
		case "CLOSE" + "-" + "FULLTEXT_CLOSE":
		case "OPEN_CONTENT" + "-" + "LINKS_CLOSE":
		case "CLOSE" + "-" + "CARDS_CLOSE":
		case "CLOSE" + "-" + "EVENT_CLOSE":
		case "CLOSE" + "-" + "AUDIO_CLOSE":
		case "CLOSE" + "-" + "CONTACTS_CLOSE":
		case "CLOSE" + "-" + "TWITTER_CLOSE":
		case "CLOSE" + "-" + "MAILINGLIST_CLOSE":
		case "CLOSE" + "-" + "BONUSFILE_CLOSE":
		case "CLOSE" + "-" + "MAILINGLIST_CLOSE":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-FERMETURE-DE-LA-SECTION-VIOLET").text() );
			$("#DETAILS-FERMETURE-DE-LA-SECTION-VIOLET").text( objValue + 1 );
			break;

		case "CLOSE" + "-" + "VIDEOS_CLOSE":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-FERMETURE-DE-LA-SECTION-BLUE").text() );
			$("#DETAILS-FERMETURE-DE-LA-SECTION-BLUE").text( objValue + 1 );
			break;
			
		case "FOLLOW" + "-" + "TWITTER_FOLLOW":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-FOLLOW").text() );
			$("#DETAILS-FOLLOW").text( objValue + 1 );
			break;
			
		case "VIEW" + "-" + "VIEW":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-KPSULE-CHARGEE").text() );
			$("#DETAILS-KPSULE-CHARGEE").text( objValue + 1 );
			break;
			
		case "OPEN_CONTENT" + "-" + "TEASER_VIEW":
		case "OPEN_CONTENT" + "-" + "VIDEOS_VIEW":
		case "OPEN_CONTENT" + "-" + "AUDIO_PLAY":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-LECTURE").text() );
			$("#DETAILS-LECTURE").text( objValue + 1 );
			break;
			
		case "PROGRESS" + "-" + "TEASER_25":
		case "PROGRESS" + "-" + "VIDEOS_25":
		case "PROGRESS" + "-" + "AUDIO_25":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-LECTUREA25").text() );
			$("#DETAILS-LECTUREA25").text( objValue + 1 );
			break;
			
		case "PROGRESS" + "-" + "TEASER_50":
		case "PROGRESS" + "-" + "VIDEOS_50":
		case "PROGRESS" + "-" + "AUDIO_50":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-LECTUREA50").text() );
			$("#DETAILS-LECTUREA50").text( objValue + 1 );
			break;
			
		case "PROGRESS" + "-" + "TEASER_75":
		case "PROGRESS" + "-" + "VIDEOS_75":
		case "PROGRESS" + "-" + "AUDIO_75":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-LECTUREA75").text() );
			$("#DETAILS-LECTUREA75").text( objValue + 1 );
			break;
			
		case "PROGRESS" + "-" + "TEASER_COMPLETE":
		case "PROGRESS" + "-" + "VIDEOS_COMPLETE":
		case "PROGRESS" + "-" + "AUDIO_COMPLETE":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-LECTUREA100").text() );
			$("#DETAILS-LECTUREA100").text( objValue + 1 );
			break;
	
	    // Lien externe
		case "EXTERNAL_LINK" + "-" + "SECTIONLINK":
		case "EXTERNAL_LINK" + "-" + "TITLELINK":
		case "EXTERNAL_LINK" + "-" + "CUSTOM":
		case "EXTERNAL_LINK" + "-" + "NEWS_LINK":
		case "EXTERNAL_LINK" + "-" + "FULLTEXT_LINK":
		case "EXTERNAL_LINK" + "-" + "LINKS_LINK":
		case "EXTERNAL_LINK" + "-" + "CARDS_LINK":
		case "EXTERNAL_LINK" + "-" + "PRODUCTS_LINK":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "-----------------------------");
			var objValue = parseInt( $("#DETAILS-LIEN-EXTERNE").text() );
			$("#DETAILS-LIEN-EXTERNE").text( objValue + 1 );	
			if( $("#DETAILS-LIEN-EXTERNE-URL").length == 0 ){
				// first time add,
				var le_block = '<p class="de-sub-txt le_url" id="DETAILS-LIEN-EXTERNE-URL">' + info.cs_s_lbl  + '</p>';
				$( le_block ).appendTo( "#DETAILS-LIEN-EXTERNE-URL-DIV" );
			}else{
				// after replace
				$("#DETAILS-LIEN-EXTERNE-URL").text(info.cs_s_lbl);
			}
			break;

		// Lien externe -> special case	
		case "EXTERNAL_LINK" + "-" + "EXTERNAL_LINK":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-LIEN-EXTERNE").text() );
			$("#DETAILS-LIEN-EXTERNE").text( objValue + 1 );		
			if( $("#DETAILS-LIEN-EXTERNE-URL").length == 0 ){
				// first time add,
				var le_block = '<p class="de-sub-txt le_url" id="DETAILS-LIEN-EXTERNE-URL">' + info.cs_s_lbl  + '</p>';
				$( le_block ).appendTo( "#DETAILS-LIEN-EXTERNE-URL-DIV" );
			}else{
				// after replace
				$("#DETAILS-LIEN-EXTERNE-URL").text(info.cs_s_lbl);
			}
			break;
			
		case "EXTERNAL_LINK" + "-" + "NEWS_GLOBALLINK":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-LIEN-EXTERNE-GLOBAL").text() );
			$("#DETAILS-LIEN-EXTERNE-GLOBAL").text( objValue + 1 );
			if( $("#DETAILS-LIEN-EXTERNE-GLOBAL-URL").length == 0 ){
				// first time add,
				var le_block = '<p class="de-sub-txt le_url" id="DETAILS-LIEN-EXTERNE-GLOBAL-URL">' + info.cs_s_lbl  + '</p>';
				$( le_block ).appendTo( "#DETAILS-LIEN-EXTERNE-GLOBAL-URL-DIV" );
			}else{
				// after replace
				$("#DETAILS-LIEN-EXTERNE-GLOBAL-URL").text(info.cs_s_lbl);
			}
			break;
			
		case "EXTERNAL_LINK" + "-" + "EVENT_LINK":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-LIEN-EXTERNE-LIEN").text() );
			$("#DETAILS-LIEN-EXTERNE-LIEN").text( objValue + 1 );
			if( $("#DETAILS-LIEN-EXTERNE-URL").length == 0 ){
				// first time add,
				var le_block = '<p class="de-sub-txt le_url" id="DETAILS-LIEN-EXTERNE-LIEN-URL">' + info.cs_s_lbl  + '</p>';
				$( le_block ).appendTo( "#DETAILS-LIEN-EXTERNE-LIEN-URL-DIV" );
			}else{
				// after replace
				$("#DETAILS-LIEN-EXTERNE-LIEN-URL").text(info.cs_s_lbl);
			}
			break;
			
		case "EXTERNAL_LINK" + "-" + "EVENT_RESA":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-LIEN-EXTERNE-RESERVATION").text() );
			$("#DETAILS-LIEN-EXTERNE-RESERVATION").text( objValue + 1 );
			if( $("#DETAILS-LIEN-EXTERNE-RESERVATION-URL").length == 0 ){
				// first time add,
				var le_block = '<p class="de-sub-txt le_url" id="DETAILS-LIEN-EXTERNE-RESERVATION-URL">' + info.cs_s_lbl  + '</p>';
				$( le_block ).appendTo( "#DETAILS-LIEN-EXTERNE-RESERVATION-URL-DIV" );
			}else{
				// after replace
				$("#DETAILS-LIEN-EXTERNE-RESERVATION-URL").text(info.cs_s_lbl);
			}
			break;	
			
		case "EXTERNAL_LINK" + "-" + "CONTACTS_MAIL":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-LIEN-EXTERNE-MAIL").text() );
			$("#DETAILS-LIEN-EXTERNE-MAIL").text( objValue + 1 );
			if( $("#DETAILS-LIEN-EXTERNE-URL").length == 0 ){
				// first time add,
				var le_block = '<p class="de-sub-txt le_url" id="DETAILS-LIEN-EXTERNE-MAIL-URL">' + info.cs_s_lbl  + '</p>';
				$( le_block ).appendTo( "#DETAILS-LIEN-EXTERNE-MAIL-URL-DIV" );
			}else{
				// after replace
				$("#DETAILS-LIEN-EXTERNE-MAIL-URL").text(info.cs_s_lbl);
			}
			break;	
			
		case "EXTERNAL_LINK" + "-" + "AUDIO_LINK":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-LIEN-EXTERNE-LIEN-GENERAL").text() );
			$("#DETAILS-LIEN-EXTERNE-LIEN-GENERAL").text( objValue + 1 );
			if( $("#DETAILS-LIEN-EXTERNE-LIEN-GENERAL-URL").length == 0 ){
				// first time add,
				var le_block = '<p class="de-sub-txt le_url" id="DETAILS-LIEN-EXTERNE-LIEN-GENERAL-URL">' + info.cs_s_lbl  + '</p>';
				$( le_block ).appendTo( "#DETAILS-LIEN-EXTERNE-LIEN-GENERAL-URL-DIV" );
			}else{
				// after replace
				$("#DETAILS-LIEN-EXTERNE-LIEN-GENERAL-URL").text(info.cs_s_lbl);
			}
			break;	
			
		case "EXTERNAL_LINK" + "-" + "AUDIO_ALBUMSHOP":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-LIEN-EXTERNE-ALBUM").text() );
			$("#DETAILS-LIEN-EXTERNE-ALBUM").text( objValue + 1 );
			if( $("#DETAILS-LIEN-EXTERNE-ALBUM-URL").length == 0 ){
				// first time add,
				var le_block = '<p class="de-sub-txt le_url" id="DETAILS-LIEN-EXTERNE-ALBUM-URL">' + info.cs_s_lbl  + '</p>';
				$( le_block ).appendTo( "#DETAILS-LIEN-EXTERNE-ALBUM-URL-DIV" );
			}else{
				// after replace
				$("#DETAILS-LIEN-EXTERNE-ALBUM-URL").text(info.cs_s_lbl);
			}
			break;	
			
		case "EXTERNAL_LINK" + "-" + "TWITTER_VIEWTWEETS":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-LIEN-EXTERNE-PAGE-TWITTER").text() );
			$("#DETAILS-LIEN-EXTERNE-PAGE-TWITTER").text( objValue + 1 );
			if( $("#DETAILS-LIEN-EXTERNE-PAGE-TWITTER-URL").length == 0 ){
				// first time add,
				var le_block = '<p class="de-sub-txt le_url" id="DETAILS-LIEN-EXTERNE-PAGE-TWITTER-URL">' + info.cs_s_lbl  + '</p>';
				$( le_block ).appendTo( "#DETAILS-LIEN-EXTERNE-PAGE-TWITTER-URL-DIV" );
			}else{
				// after replace
				$("#DETAILS-LIEN-EXTERNE-PAGE-TWITTER-URL").text(info.cs_s_lbl);
			}
			break;	
			
		case "EXTERNAL_LINK" + "-" + "TWITTER_AUTHORLINK":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-LIEN-EXTERNE-PAGE-AUTEUR-TWITTER").text() );
			$("#DETAILS-LIEN-EXTERNE-PAGE-AUTEUR-TWITTER").text( objValue + 1 );
			if( $("#DETAILS-LIEN-EXTERNE-PAGE-AUTEUR-TWITTER-URL").length == 0 ){
				// first time add,
				var le_block = '<p class="de-sub-txt le_url" id="DETAILS-LIEN-EXTERNE-PAGE-AUTEUR-TWITTER-URL">' + info.cs_s_lbl  + '</p>';
				$( le_block ).appendTo( "#DETAILS-LIEN-EXTERNE-PAGE-AUTEUR-TWITTER-URL-DIV" );
			}else{
				// after replace
				$("#DETAILS-LIEN-EXTERNE-PAGE-AUTEUR-TWITTER-URL").text(info.cs_s_lbl);
			}
			break;	
			
		case "EXTERNAL_LINK" + "-" + "EVENT_FBEVENT":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-LIEN-EXTERNE-EVENEMENT-FACEBOOK").text() );
			$("#DETAILS-LIEN-EXTERNE-EVENEMENT-FACEBOOK").text( objValue + 1 );
			if( $("#DETAILS-LIEN-EXTERNE-EVENEMENT-FACEBOOK-URL").length == 0 ){
				// first time add,
				var le_block = '<p class="de-sub-txt le_url" id="DETAILS-LIEN-EXTERNE-EVENEMENT-FACEBOOK-URL">' + info.cs_s_lbl  + '</p>';
				$( le_block ).appendTo( "#DETAILS-LIEN-EXTERNE-EVENEMENT-FACEBOOK-URL-DIV" );
			}else{
				// after replace
				$("#DETAILS-LIEN-EXTERNE-EVENEMENT-FACEBOOK-URL").text(info.cs_s_lbl);
			}
			break;
			
		case "EXTERNAL_LINK" + "-" + "AUDIO_TRACKSHOP":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-LIEN-EXTERNE-TRACK").text() );
			$("#DETAILS-LIEN-EXTERNE-TRACK").text( objValue + 1 );
			if( $("#DETAILS-LIEN-EXTERNE-TRACK-URL").length == 0 ){
				// first time add,
				var le_block = '<p class="de-sub-txt le_url" id="DETAILS-LIEN-EXTERNE-TRACK-URL">' + info.cs_s_lbl  + '</p>';
				$( le_block ).appendTo( "#DETAILS-LIEN-EXTERNE-TRACK-URL-DIV" );
			}else{
				// after replace
				$("#DETAILS-LIEN-EXTERNE-TRACK-URL").text(info.cs_s_lbl);
			}
			break;	
			
		case "EXTERNAL_LINK" + "-" + "CONTACTS_WEBSITE":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-LIEN-EXTERNE-WEBSITE").text() );
			$("#DETAILS-LIEN-EXTERNE-WEBSITE").text( objValue + 1 );
			if( $("#DETAILS-LIEN-EXTERNE-WEBSITE-URL").length == 0 ){
				// first time add,
				var le_block = '<p class="de-sub-txt le_url" id="DETAILS-LIEN-EXTERNE-WEBSITE-URL">' + info.cs_s_lbl  + '</p>';
				$( le_block ).appendTo( "#DETAILS-LIEN-EXTERNE-WEBSITE-URL-DIV" );
			}else{
				// after replace
				$("#DETAILS-LIEN-EXTERNE-WEBSITE-URL").text(info.cs_s_lbl);
			}
			break;
			
		case "EXTERNAL_LINK" + "-" + "TWITTER_TWEETLINK":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-LIEN-EXTERNE-TWEET").text() );
			$("#DETAILS-LIEN-EXTERNE-TWEET").text( objValue + 1 );	
			if( $("#DETAILS-LIEN-EXTERNE-URL").length == 0 ){
				// first time add,
				var le_block = '<p class="de-sub-txt le_url" id="DETAILS-LIEN-EXTERNE-TWEET-URL">' + info.cs_s_lbl  + '</p>';
				$( le_block ).appendTo( "#DETAILS-LIEN-EXTERNE-TWEET-URL-DIV" );
			}else{
				// after replace
				$("#DETAILS-LIEN-EXTERNE-TWEET-URL").text(info.cs_s_lbl);
			}
			break;	
			
		case "OPEN_SECTION" + "-" + "TEASER_SECTION":
		case "OPEN_SECTION" + "-" + "CUSTOM_SECTION":
		case "OPEN_SECTION" + "-" + "TEASER_SECTION":
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
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-OUVERTURE-DE-SECTION").text() );
			$("#DETAILS-OUVERTURE-DE-SECTION").text( objValue + 1 );
			break;	

		case "OPEN_SECTION" + "-" + "AUDIO_SECTION":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-OUVERTURE-DU-PANNEAU").text() );
			$("#DETAILS-OUVERTURE-DU-PANNEAU").text( objValue + 1 );
			break;	
		
		case "SHARE" + "-" + "ADS_SHARETWITTER":
		case "SHARE" + "-" + "SHARE_TWITTER":
		case "SHARE" + "-" + "VIDEOS_SHARETWITTER":
		case "SHARE" + "-" + "PHOTOS_SHARETWITTER":
		case "SHARE" + "-" + "NEWS_SHARETWITTER":
		case "SHARE" + "-" + "FULLTEXT_SHARETWITTER":
		case "SHARE" + "-" + "CARDS_SHARETWITTER":
		case "SHARE" + "-" + "EVENT_SHARETWITTER":
		case "SHARE" + "-" + "AUDIO_SHARETWITTER":
		case "SHARE" + "-" + "PRODUCTS_SHARETWITTER":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-PARTAGE-TWITTER").text() );
			$("#DETAILS-PARTAGE-TWITTER").text( objValue + 1 );
			break;	

		case "SHARE" + "-" + "ADS_SHAREGOOGLE":
		case "SHARE" + "-" + "SHARE_GOOGLE":
		case "SHARE" + "-" + "VIDEOS_SHAREGOOGLE":
		case "SHARE" + "-" + "PHOTOS_SHAREGOOGLE":
		case "SHARE" + "-" + "NEWS_SHAREGOOGLE":
		case "SHARE" + "-" + "FULLTEXT_SHAREGOOGLE":
		case "SHARE" + "-" + "CARDS_SHAREGOOGLE":
		case "SHARE" + "-" + "EVENT_SHAREGOOGLE":
		case "SHARE" + "-" + "AUDIO_SHAREGOOGLE":
		case "SHARE" + "-" + "PRODUCTS_SHAREGOOGLE":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-PARTAGE-GOOGLE").text() );
			$("#DETAILS-PARTAGE-GOOGLE").text( objValue + 1 );
			break;			
			
		case "SHARE" + "-" + "ADS_SHAREFACEBOOK":
		case "SHARE" + "-" + "SHARE_FACEBOOK":
		case "SHARE" + "-" + "VIDEOS_SHAREFACEBOOK":
		case "SHARE" + "-" + "PHOTOS_SHAREFACEBOOK":
		case "SHARE" + "-" + "NEWS_SHAREFACEBOOK":
		case "SHARE" + "-" + "FULLTEXT_SHAREFACEBOOK":
		case "SHARE" + "-" + "CARDS_SHAREFACEBOOK":
		case "SHARE" + "-" + "EVENT_SHAREFACEBOOK":
		case "SHARE" + "-" + "AUDIO_SHAREFACEBOOK":
		case "SHARE" + "-" + "PRODUCTS_SHAREFACEBOOK":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-PARTAGE-FACEBOOK").text() );
			$("#DETAILS-PARTAGE-FACEBOOK").text( objValue + 1 );
			break;			
			
		// PARTAGE MAIL 	
		case "SHARE" + "-" + "ADS_SHAREMAIL":
		case "SHARE" + "-" + "SHARE_OPENMAIL":
		case "SHARE" + "-" + "VIDEOS_SHAREOPENMAIL":
		case "SHARE" + "-" + "PHOTOS_SHAREOPENMAIL":
		case "SHARE" + "-" + "NEWS_SHAREOPENMAIL":
		case "SHARE" + "-" + "FULLTEXT_SHAREOPENMAIL":
		case "SHARE" + "-" + "CARDS_SHAREOPENMAIL":
		case "SHARE" + "-" + "EVENT_SHAREOPENMAIL":
		case "SHARE" + "-" + "AUDIO_SHAREOPENMAIL":
		case "SHARE" + "-" + "PRODUCTS_SHAREOPENMAIL":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-PARTAGE-MAIL").text() );
			$("#DETAILS-PARTAGE-MAIL").text( objValue + 1 );
			break;		

		// PARTAGE SEND MAIL 	
		case "SHARE" + "-" + "SHARE_MAIL":
		case "SHARE" + "-" + "VIDEOS_SHAREMAIL":
		case "SHARE" + "-" + "PHOTOS_SHAREMAIL":
		case "SHARE" + "-" + "NEWS_SHAREMAIL":
		case "SHARE" + "-" + "FULLTEXT_SHAREMAIL":
		case "SHARE" + "-" + "CARDS_SHAREMAIL":
		case "SHARE" + "-" + "EVENT_SHAREMAIL":
		case "SHARE" + "-" + "AUDIO_SHAREMAIL":
		case "SHARE" + "-" + "PRODUCTS_SHAREMAIL":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-PARTAGE-MAIL-SEND").text() );
			$("#DETAILS-PARTAGE-MAIL-SEND").text( objValue + 1 );
			break;				
		
		// Partage autre
		case "SHARE" + "-" + "ADS_SHAREOTHER":
		case "SHARE" + "-" + "SHARE_OTHER":
		case "SHARE" + "-" + "VIDEOS_SHAREOTHER":
		case "SHARE" + "-" + "PHOTOS_SHAREOTHER":
		case "SHARE" + "-" + "NEWS_SHAREOTHER":
		case "SHARE" + "-" + "FULLTEXT_SHAREOTHER":
		case "SHARE" + "-" + "CARDS_SHAREOTHER":
		case "SHARE" + "-" + "EVENT_SHAREOTHER":
		case "SHARE" + "-" + "AUDIO_SHAREOTHER":
		case "SHARE" + "-" + "PRODUCTS_SHAREOTHER":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-PARTAGE-AUTRE").text() );
			$("#DETAILS-PARTAGE-AUTRE").text( objValue + 1 );
			break;
			
		// PARTAGE LINK
		case "SHARE" + "-" + "VIDEOS_SHARELINK":
		case "SHARE" + "-" + "PHOTOS_SHARELINK":
		case "SHARE" + "-" + "NEWS_SHARELINK":
		case "SHARE" + "-" + "FULLTEXT_SHARELINK":
		case "SHARE" + "-" + "CARDS_SHARELINK":
		case "SHARE" + "-" + "EVENT_SHARELINK":
		case "SHARE" + "-" + "AUDIO_SHARELINK":
		case "SHARE" + "-" + "PRODUCTS_SHARELINK":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-PARTAGE-LINK").text() );
			$("#DETAILS-PARTAGE-LINK").text( objValue + 1 );
			break;						

		// Partage embed	
		case "SHARE" + "-" + "VIDEOS_SHAREEMBED":
		case "SHARE" + "-" + "PHOTOS_SHAREEMBED":
		case "SHARE" + "-" + "NEWS_SHAREEMBED":
		case "SHARE" + "-" + "FULLTEXT_SHAREEMBED":
		case "SHARE" + "-" + "CARDS_SHAREEMBED":
		case "SHARE" + "-" + "EVENT_SHAREEMBED":
		case "SHARE" + "-" + "AUDIO_SHAREEMBED":
		case "SHARE" + "-" + "PRODUCTS_SHAREEMBED":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-PARTAGE-EMBED").text() );
			$("#DETAILS-PARTAGE-EMBED").text( objValue + 1 );
			break;	

		case "FULLSCREEN" + "-" + "TEASER_FULLSCREEN":
		case "FULLSCREEN" + "-" + "VIDEOS_FULLSCREEN":
		case "FULLSCREEN" + "-" + "PHOTOS_FULLSCREEN":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-PASSAGE-EN-FULLSCREEN").text() );
			$("#DETAILS-PASSAGE-EN-FULLSCREEN").text( objValue + 1 );
			break;	

		case "RETWEET" + "-" + "TWITTER_RETWEET":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-RETWEET").text() );
			$("#DETAILS-RETWEET").text( objValue + 1 );
			break;	

		case "REPLY" + "-" + "TWITTER_REPLY":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-REPLY").text() );
			$("#DETAILS-REPLY").text( objValue + 1 );
			break;	

		case "EXIT_FULLSCREEN" + "-" + "TEASER_EXITFULLSCREEN":
		case "EXIT_FULLSCREEN" + "-" + "VIDEOS_EXITFULLSCREEN":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-SORTIR-DU-FULLSCREEN").text() );
			$("#DETAILS-SORTIR-DU-FULLSCREEN").text( objValue + 1 );
			break;	

		case "DOWNLOAD" + "-" + "PHOTOS_DOWNLOAD":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-TELECHARGEMENT-DE-PHOTO").text() );
			$("#DETAILS-TELECHARGEMENT-DE-PHOTO").text( objValue + 1 );
			break;	

		case "DOWNLOAD" + "-" + "EVENT_DATE":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-TELECHARGEMENT-DUN-EVENEMENT").text() );
			$("#DETAILS-TELECHARGEMENT-DUN-EVENEMENT").text( objValue + 1 );
			break;	

		case "DOWNLOAD" + "-" + "CONTACTS_DOWNLOAD":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-TELECHARGEMENT-DUN-CONTACT").text() );
			$("#DETAILS-TELECHARGEMENT-DUN-CONTACT").text( objValue + 1 );
			break;	

		case "EXTERNAL_LINK" + "-" + "EVENT_MAP":
		case "OPEN_CONTENT" + "-" + "EVENT_SHOWMAP":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-VOIR-LA-CARTE").text() );
			$("#DETAILS-VOIR-LA-CARTE").text( objValue + 1 );
			break;		

		case "OPEN_CONTENT" + "-" + "CUSTOM_SECTION_VIEW":
		case "OPEN_CONTENT" + "-" + "FULLTEXT_VIEW":
		case "OPEN_CONTENT" + "-" + "CONTACTS_VIEW":
		case "OPEN_CONTENT" + "-" + "MAILINGLIST_VIEW":
		case "OPEN_CONTENT" + "-" + "BONUSFILE_VIEW":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-VUE-DE-LA-SECTION").text() );
			$("#DETAILS-VUE-DE-LA-SECTION").text( objValue + 1 );
			break;		

		case "OPEN_CONTENT" + "-" + "PHOTOS_LISTVIEW":
		case "OPEN_CONTENT" + "-" + "NEWS_LISTVIEW":
		case "OPEN_CONTENT" + "-" + "CARDS_LISTVIEW":
		case "OPEN_CONTENT" + "-" + "EVENT_LISTVIEW":
		case "OPEN_CONTENT" + "-" + "PRODUCTS_LISTVIEW":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-VUE-DE-LA-LISTE").text() );
			$("#DETAILS-VUE-DE-LA-LISTE").text( objValue + 1 );
			break;		

		case "OPEN_CONTENT" + "-" + "PHOTOS_VIEW":
		case "OPEN_CONTENT" + "-" + "PRODUCTS_PHOTO":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-VUE-DUNE-PHOTO").text() );
			$("#DETAILS-VUE-DUNE-PHOTO").text( objValue + 1 );
			break;		

		case "OPEN_CONTENT" + "-" + "NEWS_VIEW":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-VUE-DUNE-NEWS").text() );
			$("#DETAILS-VUE-DUNE-NEWS").text( objValue + 1 );
			break;		

		case "OPEN_CONTENT" + "-" + "CARDS_VIEW":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-VUE-DUNE-FICHE").text() );
			$("#DETAILS-VUE-DUNE-FICHE").text( objValue + 1 );
			break;		

		case "OPEN_CONTENT" + "-" + "CARDS_TEXTE":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-VUE-DE-LA-PAGE-TEXTE").text() );
			$("#DETAILS-VUE-DE-LA-PAGE-TEXTE").text( objValue + 1 );
			break;	
			
		case "OPEN_CONTENT" + "-" + "CARDS_LINKS":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-VUE-DE-LA-PAGE-LIENS").text() );
			$("#DETAILS-VUE-DE-LA-PAGE-LIENS").text( objValue + 1 );
			break;	
			
		case "OPEN_CONTENT" + "-" + "TWITTER_ACCOUNTVIEW":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-VUE-DUN-COMPTE-TWITTER").text() );
			$("#DETAILS-VUE-DUN-COMPTE-TWITTER").text( objValue + 1 );
			break;	
			
		case "OPEN_CONTENT" + "-" + "PRODUCTS_VIEW":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-VUE-DUN-PRODUIT").text() );
			$("#DETAILS-VUE-DUN-PRODUIT").text( objValue + 1 );
			break;	
			
		case "OPEN_CONTENT" + "-" + "EVENT_VIEW":
			//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
			var objValue = parseInt( $("#DETAILS-VUE-EVENEMENT-LIEU").text() );
			$("#DETAILS-VUE-EVENEMENT-LIEU").text( objValue + 1 );
			break;		
			
		default:
			break;	
	}
}

/* Details Kpsule */
function stats_details_kpsule(info){
	// display for stats of action
	
	// add template
	var each_block_head = '<tr><td><p class="ge-ta-txt pull-left ge-ta-txt-up">Action : ' + info.cs_s_a + '</p><p class="ge-ta-txt pull-left ge-ta-txt-down">Categore : ' + info.cs_s_cat + '</p></td><td><img class="de-kp-opn" src="images/plus.jpg" alt="open" /><img class="de-kp-hid" src="images/moins.jpg" style="display:none;" alt="hide" /></td></tr><tr class="de-kp-hide"><td colspan="2" ><hr></td></tr><tr class="de-kp-hide"><td colspan="2">';
	var each_block_foot = '</td></tr><tr><td colspan="2"><hr></td></tr>';
	
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

/* Function Else */
function default_css_events(){
	/* default display for events */
	$("#events-opn,#details,#details-kpsule,.de-kp-hid,.nom-de-la-section").hide();
}

function default_css_timers(){
	/* default display for timers */
    $("#timers-opn").hide();
}

function capitalise_first_letter(string){
	/* make the first letter of a string upper-case */
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function parse_xml(info){
	"Parse XML of a Kpsule to find a related section name"

	var kid = info.cs_s_kid;
	var eid = info.cs_s_fpath.split("/")[0];
	var ck_kid = /^\d+$/.test(kid);
	var ck_eid = /^\d+$/.test(eid);
	//console.log( kid, "-", ck_kid, "    ", eid, "-", ck_eid);
		
	// test, nom de la section, var: aid
	if( ck_eid && ck_kid ){
	
		// get < Nom de la Section >
		var obj_xml = window.KPSULE_MAP[ kid ].data;
		var obj_section = $( obj_xml ).find("nav").find("section[eid='" + eid + "']").attr("title").toUpperCase();	

		// identify, css display and replace name 	
		switch(info.cs_s_cat + "-" + info.cs_s_a){
	
			case "SUSCRIBE" + "-" + "MAILINGLIST_SUBSCRIBE":
			case "SUSCRIBE" + "-" + "BONUSFILE_SUBSCRIBE":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");		
				$("#DETAILS-ENVOI-DU-FORMULAIRE-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-ENVOI-DU-FORMULAIRE-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-ENVOI-DU-FORMULAIRE-NOM").text(obj_section);
				break;	
				
			case "CLOSE" + "-" + "TEASER_CLOSE":
			case "CLOSE" + "-" + "PHOTOS_CLOSE":
			case "CLOSE" + "-" + "NEWS_CLOSE":
			case "CLOSE" + "-" + "FULLTEXT_CLOSE":
			case "OPEN_CONTENT" + "-" + "LINKS_CLOSE":
			case "CLOSE" + "-" + "CARDS_CLOSE":
			case "CLOSE" + "-" + "EVENT_CLOSE":
			case "CLOSE" + "-" + "AUDIO_CLOSE":
			case "CLOSE" + "-" + "CONTACTS_CLOSE":
			case "CLOSE" + "-" + "TWITTER_CLOSE":
			case "CLOSE" + "-" + "MAILINGLIST_CLOSE":
			case "CLOSE" + "-" + "BONUSFILE_CLOSE":
			case "CLOSE" + "-" + "MAILINGLIST_CLOSE":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
				$("#DETAILS-FERMETURE-DE-LA-SECTION-VIOLET-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-FERMETURE-DE-LA-SECTION-VIOLET-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-FERMETURE-DE-LA-SECTION-VIOLET-NOM").text(obj_section);
				break;

			case "CLOSE" + "-" + "VIDEOS_CLOSE":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
				
				$("#DETAILS-FERMETURE-DE-LA-SECTION-BLUE-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-FERMETURE-DE-LA-SECTION-BLUE-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-FERMETURE-DE-LA-SECTION-BLUE-NOM").text(obj_section);
				break;
				
			case "FOLLOW" + "-" + "TWITTER_FOLLOW":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");

				$("#DETAILS-FOLLOW-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-FOLLOW-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-FOLLOW-NOM").text(obj_section);
				break;
								
			case "OPEN_CONTENT" + "-" + "TEASER_VIEW":
			case "OPEN_CONTENT" + "-" + "VIDEOS_VIEW":
			case "OPEN_CONTENT" + "-" + "AUDIO_PLAY":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
	
				$("#DETAILS-LECTURE-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-LECTURE-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-LECTURE-NOM").text(obj_section);
				break;
				
			case "PROGRESS" + "-" + "TEASER_25":
			case "PROGRESS" + "-" + "VIDEOS_25":
			case "PROGRESS" + "-" + "AUDIO_25":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");

				$("#DETAILS-LECTUREA25-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-LECTUREA25-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-LECTUREA25-NOM").text(obj_section);
				break;
				
			case "PROGRESS" + "-" + "TEASER_50":
			case "PROGRESS" + "-" + "VIDEOS_50":
			case "PROGRESS" + "-" + "AUDIO_50":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");

				$("#DETAILS-LECTUREA50-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-LECTUREA50-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-LECTUREA50-NOM").text(obj_section);
				break;
				
			case "PROGRESS" + "-" + "TEASER_75":
			case "PROGRESS" + "-" + "VIDEOS_75":
			case "PROGRESS" + "-" + "AUDIO_75":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");

				$("#DETAILS-LECTUREA75-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-LECTUREA75-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-LECTUREA75-NOM").text(obj_section);
				break;
				
			case "PROGRESS" + "-" + "TEASER_COMPLETE":
			case "PROGRESS" + "-" + "VIDEOS_COMPLETE":
			case "PROGRESS" + "-" + "AUDIO_COMPLETE":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
				
				$("#DETAILS-LECTUREA100-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-LECTUREA100-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-LECTUREA100-NOM").text(obj_section);
				break;
				
			// Lien externe
			case "EXTERNAL_LINK" + "-" + "SECTIONLINK":
			case "EXTERNAL_LINK" + "-" + "TITLELINK":
			case "EXTERNAL_LINK" + "-" + "CUSTOM":
			case "EXTERNAL_LINK" + "-" + "NEWS_LINK":
			case "EXTERNAL_LINK" + "-" + "FULLTEXT_LINK":
			case "EXTERNAL_LINK" + "-" + "LINKS_LINK":
			case "EXTERNAL_LINK" + "-" + "CARDS_LINK":
			case "EXTERNAL_LINK" + "-" + "PRODUCTS_LINK":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "-----------------------------");					
				$("#DETAILS-LIEN-EXTERNE-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-LIEN-EXTERNE-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-LIEN-EXTERNE-NOM").text(obj_section);
				break;
											
			case "EXTERNAL_LINK" + "-" + "NEWS_GLOBALLINK":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");				
				$("#DETAILS-LIEN-EXTERNE-GLOBAL-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-LIEN-EXTERNE-GLOBAL-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-LIEN-EXTERNE-GLOBAL-NOM").text(obj_section);
				break;
				
			case "EXTERNAL_LINK" + "-" + "EVENT_LINK":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");							
				$("#DETAILS-LIEN-EXTERNE-LIEN-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-LIEN-EXTERNE-LIEN-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-LIEN-EXTERNE-LIEN-NOM").text(obj_section);
				break;
				
			case "EXTERNAL_LINK" + "-" + "EVENT_RESA":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");										
				$("#DETAILS-LIEN-EXTERNE-RESERVATION-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-LIEN-EXTERNE-RESERVATION-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-LIEN-EXTERNE-RESERVATION-NOM").text(obj_section);
				break;
				
			case "EXTERNAL_LINK" + "-" + "CONTACTS_MAIL":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");					
				$("#DETAILS-LIEN-EXTERNE-MAIL-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-LIEN-EXTERNE-MAIL-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-LIEN-EXTERNE-MAIL-NOM").text(obj_section);
				break;
				
			case "EXTERNAL_LINK" + "-" + "AUDIO_LINK":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");				
				$("#DETAILS-LIEN-EXTERNE-LIEN-GENERAL-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-LIEN-EXTERNE-LIEN-GENERAL-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-LIEN-EXTERNE-LIEN-GENERAL-NOM").text(obj_section);
				break;
				
			case "EXTERNAL_LINK" + "-" + "AUDIO_ALBUMSHOP":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");				
				$("#DETAILS-LIEN-EXTERNE-ALBUM-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-LIEN-EXTERNE-ALBUM-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-LIEN-EXTERNE-ALBUM-NOM").text(obj_section);
				break;
				
			case "EXTERNAL_LINK" + "-" + "TWITTER_VIEWTWEETS":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");					
				$("#DETAILS-LIEN-EXTERNE-PAGE-TWITTER-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-LIEN-EXTERNE-PAGE-TWITTER-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-LIEN-EXTERNE-PAGE-TWITTER-NOM").text(obj_section);
				break;
				
			case "EXTERNAL_LINK" + "-" + "TWITTER_AUTHORLINK":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");				
				$("#DETAILS-LIEN-EXTERNE-PAGE-AUTEUR-TWITTER-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-LIEN-EXTERNE-PAGE-AUTEUR-TWITTER-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-LIEN-EXTERNE-PAGE-AUTEUR-TWITTER-NOM").text(obj_section);
				break;
				
			case "EXTERNAL_LINK" + "-" + "EVENT_FBEVENT":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");			
				$("#DETAILS-LIEN-EXTERNE-EVENEMENT-FACEBOOK-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-LIEN-EXTERNE-EVENEMENT-FACEBOOK-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-LIEN-EXTERNE-EVENEMENT-FACEBOOK-NOM").text(obj_section);
				break;
				
			case "EXTERNAL_LINK" + "-" + "AUDIO_TRACKSHOP":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");					
				$("#DETAILS-LIEN-EXTERNE-TRACK-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-LIEN-EXTERNE-TRACK-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-LIEN-EXTERNE-TRACK-NOM").text(obj_section);
				break;
				
			case "EXTERNAL_LINK" + "-" + "CONTACTS_WEBSITE":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");					
				$("#DETAILS-LIEN-EXTERNE-WEBSITE-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-LIEN-EXTERNE-WEBSITE-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-LIEN-EXTERNE-WEBSITE-NOM").text(obj_section);
				break;
				
			case "EXTERNAL_LINK" + "-" + "TWITTER_TWEETLINK":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");				
				$("#DETAILS-LIEN-EXTERNE-TWEET-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-LIEN-EXTERNE-TWEET-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-LIEN-EXTERNE-TWEET-NOM").text(obj_section);
				break;
				
			case "OPEN_SECTION" + "-" + "TEASER_SECTION":
			case "OPEN_SECTION" + "-" + "CUSTOM_SECTION":
			case "OPEN_SECTION" + "-" + "TEASER_SECTION":
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
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");					
				$("#DETAILS-OUVERTURE-DE-SECTION-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-OUVERTURE-DE-SECTION-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-OUVERTURE-DE-SECTION-NOM").text(obj_section);
				break;

			case "OPEN_SECTION" + "-" + "AUDIO_SECTION":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");						
				$("#DETAILS-OUVERTURE-DU-PANNEAU-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-OUVERTURE-DU-PANNEAU-NOM").show();
				$("#DETAILS-OUVERTURE-DU-PANNEAU-NOM").text(obj_section);
				break;
			
			case "FULLSCREEN" + "-" + "TEASER_FULLSCREEN":
			case "FULLSCREEN" + "-" + "VIDEOS_FULLSCREEN":
			case "FULLSCREEN" + "-" + "PHOTOS_FULLSCREEN":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");					
				$("#DETAILS-PASSAGE-EN-FULLSCREEN-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-PASSAGE-EN-FULLSCREEN-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-PASSAGE-EN-FULLSCREEN-NOM").text(obj_section);
				break;
				
			case "RETWEET" + "-" + "TWITTER_RETWEET":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");						
				$("#DETAILS-RETWEET-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-RETWEET-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-RETWEET-NOM").text(obj_section);
				break;

			case "REPLY" + "-" + "TWITTER_REPLY":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");					
				$("#DETAILS-REPLY-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-REPLY-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-REPLY-NOM").text(obj_section);
				break;

			case "EXIT_FULLSCREEN" + "-" + "TEASER_EXITFULLSCREEN":
			case "EXIT_FULLSCREEN" + "-" + "VIDEOS_EXITFULLSCREEN":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");					
				$("#DETAILS-SORTIR-DU-FULLSCREEN-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-SORTIR-DU-FULLSCREEN-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-SORTIR-DU-FULLSCREEN-NOM").text(obj_section);
				break;

			case "DOWNLOAD" + "-" + "PHOTOS_DOWNLOAD":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");					
				$("#DETAILS-TELECHARGEMENT-DE-PHOTO-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-TELECHARGEMENT-DE-PHOTO-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-TELECHARGEMENT-DE-PHOTO-NOM").text(obj_section);
				break;

			case "DOWNLOAD" + "-" + "EVENT_DATE":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");						
				$("#DETAILS-TELECHARGEMENT-DUN-EVENEMENT-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-TELECHARGEMENT-DUN-EVENEMENT-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-TELECHARGEMENT-DUN-EVENEMENT-NOM").text(obj_section);
				break;

			case "DOWNLOAD" + "-" + "CONTACTS_DOWNLOAD":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");;							
				$("#DETAILS-TELECHARGEMENT-DUN-CONTACT-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-TELECHARGEMENT-DUN-CONTACT-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-TELECHARGEMENT-DUN-CONTACT-NOM").text(obj_section);
				break;

			case "EXTERNAL_LINK" + "-" + "EVENT_MAP":
			case "OPEN_CONTENT" + "-" + "EVENT_SHOWMAP":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");						
				$("#DETAILS-VOIR-LA-CARTE-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-VOIR-LA-CARTE-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-VOIR-LA-CARTE-NOM").text(obj_section);
				break;

			case "OPEN_CONTENT" + "-" + "CUSTOM_SECTION_VIEW":
			case "OPEN_CONTENT" + "-" + "FULLTEXT_VIEW":
			case "OPEN_CONTENT" + "-" + "CONTACTS_VIEW":
			case "OPEN_CONTENT" + "-" + "MAILINGLIST_VIEW":
			case "OPEN_CONTENT" + "-" + "BONUSFILE_VIEW":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");					
				$("#DETAILS-VUE-DE-LA-SECTION-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-VUE-DE-LA-SECTION-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-VUE-DE-LA-SECTION-NOM").text(obj_section);
				break;

			case "OPEN_CONTENT" + "-" + "PHOTOS_LISTVIEW":
			case "OPEN_CONTENT" + "-" + "NEWS_LISTVIEW":
			case "OPEN_CONTENT" + "-" + "CARDS_LISTVIEW":
			case "OPEN_CONTENT" + "-" + "EVENT_LISTVIEW":
			case "OPEN_CONTENT" + "-" + "PRODUCTS_LISTVIEW":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");					
				$("#DETAILS-VUE-DE-LA-LISTE-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-VUE-DE-LA-LISTE-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-VUE-DE-LA-LISTE-NOM").text(obj_section);
				break;

			case "OPEN_CONTENT" + "-" + "PHOTOS_VIEW":
			case "OPEN_CONTENT" + "-" + "PRODUCTS_PHOTO":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");						
				$("#DETAILS-VUE-DUNE-PHOTO-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-VUE-DUNE-PHOTO-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-VUE-DUNE-PHOTO-NOM").text(obj_section);
				break;

			case "OPEN_CONTENT" + "-" + "NEWS_VIEW":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");					
				$("#DETAILS-VUE-DUNE-NEWS-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-VUE-DUNE-NEWS-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-VUE-DUNE-NEWS-NOM").text(obj_section);
				break;

			case "OPEN_CONTENT" + "-" + "CARDS_VIEW":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");						
				$("#DETAILS-VUE-DUNE-FICHE-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-VUE-DUNE-FICHE-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-VUE-DUNE-FICHE-NOM").text(obj_section);
				break;

			case "OPEN_CONTENT" + "-" + "CARDS_TEXTE":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");					
				$("#DETAILS-VUE-DE-LA-PAGE-TEXTE-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-VUE-DE-LA-PAGE-TEXTE-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-VUE-DE-LA-PAGE-TEXTE-NOM").text(obj_section);
				break;
				
			case "OPEN_CONTENT" + "-" + "CARDS_LINKS":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");					
				$("#DETAILS-VUE-DE-LA-PAGE-LIENS-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-VUE-DE-LA-PAGE-LIENS-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-VUE-DE-LA-PAGE-LIENS-NOM").text(obj_section);
				break;
				
			case "OPEN_CONTENT" + "-" + "TWITTER_ACCOUNTVIEW":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");					
				$("#DETAILS-VUE-DUN-COMPTE-TWITTER-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-VUE-DUN-COMPTE-TWITTER-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-VUE-DUN-COMPTE-TWITTER-NOM").text(obj_section);
				break;
				
			case "OPEN_CONTENT" + "-" + "PRODUCTS_VIEW":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");				
				$("#DETAILS-VUE-DUN-PRODUIT-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-VUE-DUN-PRODUIT-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-VUE-DUN-PRODUIT-NOM").text(obj_section);
				break;
				
			case "OPEN_CONTENT" + "-" + "EVENT_VIEW":
				//console.log("---------", info.cs_s_cat, "--------", info.cs_s_a, "------------------------------");
				$("#DETAILS-VUE-EVENEMENT-LIEU-NOM").closest("tr.nom-de-la-section").show();
				$("#DETAILS-VUE-EVENEMENT-LIEU-NOM").closest("tr.nom-de-la-section").next().show();
				$("#DETAILS-VUE-EVENEMENT-LIEU-NOM").text(obj_section);
				break;
				
			default:
				break;	
		}
	}else{
		console.log("There is nothing !!!!!!!!");
	}
}

function trackEvent( info ) {
	// charge realtime data and display on html

	console.log(info);
	stats_general(info);
	stats_general_action(info);
	stats_detail(info);
	stats_details_kpsule(info);
	parse_xml(info); 
}

$(document).ready(function(){

	// set default 
	default_css_events();
	default_css_timers();
	
	/* click and change */
	// events
	$("#events-cls").click(function(){
		//close
		$("#ge-de-dek,#general,#details,#details-kpsule,#events-cls").hide();
		// change display icon
		$("#events-opn").show();
	});
	$("#events-opn").click(function(){
		$("#ge-de-dek,#general,#details,#details-kpsule,#events-cls").show();
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
	});
	
	// details
	$("#de-dsp").click(function(){
		//display
		$("#details").show();
		//hide
		$("#general,#details-kpsule").hide();
		//all details kpsule closed
		$(".de-kp-hid").hide();
		$(".de-kp-opn").show();
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
	/*$(".de-kp-hid").click(function(){
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
	});*/
	
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