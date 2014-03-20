/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'NewApp',

    requires: [
        'Ext.MessageBox'
    ],

    views: [
        'Main'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
    	
    	
    	
    	
    	Ext.define('ListItem', {
    	    extend: 'Ext.data.Model',
    	    config: {
    	    	fields: [{
                    name: 'text',
                    type: 'string'
                }]
    	    }
    	});
    	

    	var treeStore = Ext.create('Ext.data.TreeStore', {
    	    model: 'ListItem',
    	    defaultRootProperty: 'items',
    	    root: {
    	        items: [
    	            {
    	                text: 'Drinks',
    	                items: [
    	                    {
    	                        text: 'Water',
    	                        items: [
    	                            { text: 'Still', leaf: true },
    	                            { text: 'Sparkling', leaf: true }
    	                        ]
    	                    },
    	                    { text: 'Soda', leaf: true }
    	                ]
    	            },
    	            {
    	                text: 'Snacks',
    	                items: [
    	                    { text: 'Nuts', leaf: true },
    	                    { text: 'Pretzels', leaf: true },
    	                    { text: 'Wasabi Peas', leaf: true  }
    	                ]
    	            }
    	        ]
    	    }
    	});
    	
    	
    	
    	
    	
    
            Ext.create("Ext.tab.Panel", {
                fullscreen: true,
                tabBarPosition: 'bottom',
                
	                items: [
	                    {
	                        title: 'Home',
	                        iconCls: 'home',
	                        cls: 'home',
	                        
	                        html: [
	                               '<img src="http://staging.sencha.com/img/sencha.png" />',
	                               '<h1>Welcome to my Sencha Touch App</h1>'
	                               
	                           ].join("")
	                    },
	                    
	                    
	                    
	                    {
	                    	
	                    	 	title: 'FAQ',
		                        iconCls: 'list',
		                        xtype: 'list',

	                    	    store: {
	                    	        fields: ['name'],
	                    	        data: [
	                    	            {name: 'Hello!'},
	                    	            {name: 'What can I do here?'},
	                    	            {name: 'Touch'},
	                    	            {name: 'Bye!'}
	                    	        ]
	                    	    },

	                    	    itemTpl: '{name}',

	                    	    listeners: {
	                    	        select: function(view, record) {
	                    	        	
	                    	        		if (record.get('name')==='Hello!'){
	                    	        	
	                    	            Ext.Msg.alert( 'Hello to you!');
	                    	            										
	                    	        		}
	                    	        		
	                    	        		if (record.get('name')==='What can I do here?'){
	    	                    	        	
	    	                    	            Ext.Msg.alert('It is a test', 'Just choose an option!');
	    	                    	            										
	    	                    	        		}
	                    	        		if (record.get('name')==='Touch'){
	    	                    	        	
	    	                    	            Ext.Msg.alert('Aah!', 'Do not touch me!');
	    	                    	            										
	    	                    	        		}
	                    	        		if (record.get('name')==='Bye!'){
	    	                    	        	
	    	                    	            Ext.Msg.alert('Goodbye');
	    	                    	            										
	    	                    	        		}
	                    	        }
	                    	    }
	                    	
	                    },
	                    
	                    
	                    
	                    
	                    
	                    
	                    
	                    
	                    
	                    
	                    
	                    {
	                    	title: 'Cities',
	                        iconCls: 'maps',
	                        xtype: 'carousel',
	                        
	                        defaults: {
	                            styleHtmlContent: true
	                        },
	                        
	                        items: [
	                                {
	                                    html : '<div align=center><img src="http://www.hintergrundbilder-pc.de/hintergrundbilder_stadt_skyline/stadt_skyline_03_003.jpg" /></div>',
	                                    style: 'background-color: #5E99CC'
	                                },
	                                {
	                                	html : '<div align=center><img src="http://www.hintergrundbilder-pc.de/hintergrundbilder_stadt_skyline/stadt_skyline_04_003.jpg" /></div>',
	                                    style: 'background-color: #759E60'
	                                },
	                                {
	                                	html : '<div align=center><img src="http://www.hintergrundbilder-pc.de/hintergrundbilder_stadt_skyline/stadt_skyline_05_003.jpg" /></div>',
	                                    style: 'background-color: #5E99CC'
	                                }
	                            ]
	                    	
	                    	
	                    } ,
	                    
	                    
	                    
	                    {
	                        title: 'Contact',
	                        iconCls: 'user',
	                        xtype: 'formpanel',
	                        url: 'contact.php',
	                        layout: 'vbox',

	                        items: [
	                            {
	                                xtype: 'fieldset',
	                                title: 'Give me your data!',
	                                instructions: '(your info wont go anywhere)',
	                                height: 285,
	                                items: [
	                                    {
	                                        xtype: 'textfield',
	                                        label: 'Your Name'
	                                    },
	                                    {
	                                        xtype: 'emailfield',
	                                        label: 'Your Email'
	                                    },
	                                    {
	                                        xtype: 'textareafield',
	                                        label: 'And all the rest'
	                                    }
	                                ]
	                            },
	                            {
	                                xtype: 'button',
	                                text: 'Send',
	                                ui: 'confirm',
	                                handler: function() {
	                                    this.up('formpanel').submit();
	                                }
	                            }
	                        ]
	                    }
	                    
	                    
	          
	                    
	                    
	                    
	                    
	                    
	                    
	                ]
            });
       
    	
            // Destroy the #appLoadingIndicator element
            //Ext.fly('appLoadingIndicator').destroy();

            // Initialize the main view
            //Ext.Viewport.add(Ext.create('NewApp.view.Main'));
    	
      
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
