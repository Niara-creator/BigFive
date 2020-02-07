var data = {
  bayarea:{
    link:[
      "https://www.ucsf.edu/sites/default/files/styles/2015_news_center_rotator/public/field/image/news/gun-crying-eye-V2.jpg",
    "https://news.ucsc.edu/2017/08/images/ceasefire_4701.jpg"
    ],
    article:{
    title:["Beyond Bullet","Hundreds Rally in SF on Gun Violence"],
    links:[
      "https://www.ucsf.edu/news/2018/12/412651/beyond-bullet","https://www.nbcbayarea.com/news/local/hundreds-rally-in-san-francisco-demanding-action-on-gun-violence-in-one-of-dozens-nationwide/94165"
      ]
    },
    music:[
      "https://www.youtube.com/embed/DmxC6xEPjWE","https://www.youtube.com/embed/w0N5OEpxbFY"
      ],
  },
  socal:{
    link:[
      "https://pbs.twimg.com/media/DuRD8yoW0AA83ME.jpg","https://static01.nyt.com/images/2016/02/28/opinion/sunday/28manseau/28manseau-jumbo.jpg"
    ],
    article:{
      title:["Gun Violence Report", "Weapons used in LA Homicides"],
      links:[
      "https://www.nbclosangeles.com/news/lapd-report-gun-violence-spiked-in-early-2019/155598",
      "https://xtown.la/2019/02/27/weapons-used-in-los-angeles-homicides"],
    },
    music:[
      "https://www.youtube.com/embed/x3YRJl2DjtM",
      "https://www.youtube.com/embed/9YZm5n9VNZQ"
    ],
  }
};


$(".aboutText").hide();
$(".aboutButton").click(function(){
  $(".aboutText").toggle();
});


