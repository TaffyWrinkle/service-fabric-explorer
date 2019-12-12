import { Component, OnInit } from '@angular/core';
import { IRawBackupPolicy, IRawRetentionPolicy } from 'src/app/Models/RawDataTypes';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-action-update-backup-policy',
  templateUrl: './action-update-backup-policy.component.html',
  styleUrls: ['./action-update-backup-policy.component.scss']
})
export class ActionUpdateBackupPolicyComponent implements OnInit {

  public backupPolicy: IRawBackupPolicy;
  public date: string;
  public retentionPolicyRequired: boolean;
  public RetentionPolicy: IRawRetentionPolicy;
  public weekDay: string[];
  public daySelectedMapping: Record<string, Boolean>;
  public delete: any;

  constructor() { }

  ngOnInit() {
    this.retentionPolicyRequired = false;
    this.date = "";
    this.weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    this.daySelectedMapping = {};
    this.backupPolicy = raw;
    if (this.backupPolicy["RetentionPolicy"]) {
        this.retentionPolicyRequired = true;
        this.RetentionPolicy = this.backupPolicy["RetentionPolicy"];
    }
    if (this.backupPolicy.Schedule.RunDays) {
        for (let day of this.backupPolicy.Schedule.RunDays)
        {
            this.daySelectedMapping[day] = true;
        }
    }
  }

  public add(): void {
    if (this.backupPolicy.Schedule.RunTimes === null || this.backupPolicy.Schedule.RunTimes === undefined) {
        this.backupPolicy.Schedule.RunTimes = [];
    }
    this.backupPolicy.Schedule.RunTimes.push(this.date);
    this.date = "";
  }

  public deleteDate(index: number): void {
      this.backupPolicy.Schedule.RunTimes.splice(index, 1);
  }

  private updateBackupPolicy(data: DataService): Observable<any> {
      if (this.retentionPolicyRequired) {
          this.RetentionPolicy.RetentionPolicyType = "Basic";
          this.backupPolicy["RetentionPolicy"] = this.RetentionPolicy;
      } else {
          this.backupPolicy["RetentionPolicy"] = null;
      }

      if (this.backupPolicy.Schedule.ScheduleKind === "TimeBased" && this.backupPolicy.Schedule.ScheduleFrequencyType === "Weekly") {
          this.backupPolicy.Schedule.RunDays = [];
          for (let day of this.weekDay) {
              if (this.daySelectedMapping[day]) {
                  this.backupPolicy.Schedule.RunDays.push(day);
              }
          }
      }
      return data.restClient.updateBackupPolicy(this.backupPolicy);
  }

}
