import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  years = [
    {"name": "1990", "value": "1990"},
    {"name": "1991", "value": "1991"},
    {"name": "1992", "value": "1992"},
    {"name": "1993", "value": "1993"},
    {"name": "1994", "value": "1994"},
    {"name": "1995", "value": "1995"},
    {"name": "1996", "value": "1996"},
    {"name": "1997", "value": "1997"},
    {"name": "1998", "value": "1998"},
    {"name": "1999", "value": "1999"},
    {"name": "2000", "value": "2000"},
    {"name": "2001", "value": "2001"},
    {"name": "2002", "value": "2002"},
    {"name": "2003", "value": "2003"},
    {"name": "2004", "value": "2004"},
    {"name": "2005", "value": "2005"},
    {"name": "2006", "value": "2006"},
    {"name": "2007", "value": "2007"},
    {"name": "2008", "value": "2008"}
  ]

  months = [
    {"name": "January", "value": "January"},
    {"name": "February", "value": "February"},
    {"name": "March", "value": "March"},
    {"name": "April", "value": "April"},
    {"name": "May", "value": "May"},
    {"name": "June", "value": "June"},
    {"name": "July", "value": "July"},
    {"name": "August", "value": "August"},
    {"name": "September", "value": "September"},
    {"name": "October", "value": "October"},
    {"name": "November", "value": "November"},
    {"name": "December", "value": "December"}
  ]
  
  days = [
    {"name": "1", "value": "1"},
    {"name": "2", "value": "2"},
    {"name": "3", "value": "3"},
    {"name": "4", "value": "4"},
    {"name": "5", "value": "5"},
    {"name": "6", "value": "6"},
    {"name": "7", "value": "7"},
    {"name": "8", "value": "8"},
    {"name": "9", "value": "9"},
    {"name": "10", "value": "10"},
    {"name": "11", "value": "11"},
    {"name": "12", "value": "12"},
    {"name": "13", "value": "13"},
    {"name": "14", "value": "14"},
    {"name": "15", "value": "15"},
    {"name": "16", "value": "16"},
    {"name": "17", "value": "17"},
    {"name": "18", "value": "18"},
    {"name": "19", "value": "19"},
    {"name": "20", "value": "20"},
    {"name": "21", "value": "21"},
    {"name": "22", "value": "22"},
    {"name": "23", "value": "23"},
    {"name": "24", "value": "24"},
    {"name": "25", "value": "25"},
    {"name": "26", "value": "26"},
    {"name": "27", "value": "27"},
    {"name": "28", "value": "28"},
    {"name": "29", "value": "29"},
    {"name": "30", "value": "30"},
    {"name": "31", "value": "31"}
  ]
  
  

  constructor() { }

  ngOnInit() {
  }

}
