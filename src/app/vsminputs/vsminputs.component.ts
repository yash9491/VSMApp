import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Process } from '../Models/process';
import { WeekDay } from '@angular/common';

@Component({
  selector: 'app-vsminputs',
  templateUrl: './vsminputs.component.html',
  styleUrls: ['./vsminputs.component.css'],
  animations: [
    trigger('rowExpansionTrigger', [
      state('void', style({
        transform: 'translateX(-10%)',
        opacity: 0
      })),
      state('active', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class VSMInputsComponent implements OnInit {

  cols: any[];
  cols2: any[];
  process: Process[];
  public isExpanded: boolean = false;
  public expandedRows = {};
  public temDataLength: number = 0;

  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'ProcessName', header: 'Process Name' },
      { field: 'ProcessingTime', header: 'Processing Time' },
      { field: 'ElapsedTime', header: 'Elapsed Time' },
      { field: 'WaitTime', header: 'Wait Time' },
      { field: 'WeightedTime', header: 'Weighted Time' }
    ];
    this.process = [
      {
        "ProcessName": "Plan", "ProcessingTime": 0.00, "ElapsedTime": 0.00,
        "WaitTime": 0.00, "WeightedTime": 0.00, "Activities": [{
          "ActivityName": "", "ProcessingTime": 0.00, "ElapsedTime": 0.00,
          "WaitTime": 0.00, "WeightedTime": 0.00
        }]
      },
      {
        "ProcessName": "Design", "ProcessingTime": 0.00, "ElapsedTime": 0.00,
        "WaitTime": 0.00, "WeightedTime": 0.00, "Activities": [{
          "ActivityName": "", "ProcessingTime": 0.00, "ElapsedTime": 0.00,
          "WaitTime": 0.00, "WeightedTime": 0.00
        }]
      },
      {
        "ProcessName": "Develope", "ProcessingTime": 0.00, "ElapsedTime": 0.00,
        "WaitTime": 0.00, "WeightedTime": 0.00, "Activities": [{
          "ActivityName": "", "ProcessingTime": 0.00, "ElapsedTime": 0.00,
          "WaitTime": 0.00, "WeightedTime": 0.00
        }]
      },
      {
        "ProcessName": "Test", "ProcessingTime": 0.00, "ElapsedTime": 0.00,
        "WaitTime": 0.00, "WeightedTime": 0.00, "Activities": [{
          "ActivityName": "", "ProcessingTime": 0.00, "ElapsedTime": 0.00,
          "WaitTime": 0.00, "WeightedTime": 0.00
        }]
      },
      {
        "ProcessName": "Deployment", "ProcessingTime": 0.00, "ElapsedTime": 0.00,
        "WaitTime": 0.00, "WeightedTime": 0.00, "Activities": [{
          "ActivityName": "", "ProcessingTime": 0.00, "ElapsedTime": 0.00,
          "WaitTime": 0.00, "WeightedTime": 0.00
        }]
      },
      {
        "ProcessName": "Implementation", "ProcessingTime": 0.00, "ElapsedTime": 0.00,
        "WaitTime": 0.00, "WeightedTime": 0.00, "Activities": [{
          "ActivityName": "", "ProcessingTime": 0.00, "ElapsedTime": 0.00,
          "WaitTime": 0.00, "WeightedTime": 0.00
        }]
      },
    ];
  }
  onRowExpand() {
    if (Object.keys(this.expandedRows).length === this.temDataLength) {
      this.isExpanded = true;
    }
  }
  onRowCollapse() {
    if (Object.keys(this.expandedRows).length === 0) {
      this.isExpanded = false;
    }
  }
  AddActivity(event: any) {

    var processname = (<HTMLInputElement>document.getElementById("process")).value;
    var activityname = (<HTMLInputElement>document.getElementById("activity")).value;
    var processingtime = parseFloat((<HTMLInputElement>document.getElementById("processingtime")).value);
    var elapsedtime = parseFloat((<HTMLInputElement>document.getElementById("elapsedtime")).value);
    var waittime = parseFloat((<HTMLInputElement>document.getElementById("waittime")).value);
    var weightedtime = parseFloat((<HTMLInputElement>document.getElementById("weightedtime")).value);

    
    var procindex = processname == 'Plan' ? 0 : processname == 'Design' ? 1 : processname == 'Develop' ? 2
      : processname == 'Test' ? 3 : processname == 'Deployment' ? 4 : 5;
    this.process[procindex].Activities.push({
      ActivityName: activityname,
      ProcessingTime: processingtime,
      ElapsedTime: elapsedtime,
      WaitTime: waittime,
      WeightedTime: weightedtime
    });

    this.updateProcessMetrics(procindex);

    (<HTMLInputElement>document.getElementById("process")).value = '--- Select a Process ---';
    (<HTMLInputElement>document.getElementById("activity")).value = '';
    (<HTMLInputElement>document.getElementById("processingtime")).value = '';
    (<HTMLInputElement>document.getElementById("elapsedtime")).value = '';
    (<HTMLInputElement>document.getElementById("waittime")).value = '';
    (<HTMLInputElement>document.getElementById("weightedtime")).value = '';
  }
  updateProcessMetrics(index: number) {

    var weighttime: number = 0;
    var proctime:number = 0;
    var elaptime:number = 0;
    var waittime:number = 0;

    for (var i = 0; i < this.process[index].Activities.length; i++) {
      proctime += this.process[index].Activities[i].ProcessingTime;
      elaptime += this.process[index].Activities[i].ElapsedTime;
      waittime += this.process[index].Activities[i].WaitTime;
      weighttime += this.process[index].Activities[i].WeightedTime;
    }
    this.process[index].ProcessingTime = proctime;
    this.process[index].ElapsedTime = elaptime;
    this.process[index].WaitTime = waittime;
    this.process[index].WeightedTime = weighttime;
  }

}
