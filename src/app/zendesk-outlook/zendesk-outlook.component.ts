import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ZendeskHelper } from 'src/app/helpers/zendesk.helper';

@Component({
  selector: 'app-zendesk-outlook',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './zendesk-outlook.component.html',
  styleUrls: ['./zendesk-outlook.component.scss']
})
export class ZendeskOutlookComponent implements OnInit {
  public form: FormGroup;

  public ngOnInit(): void {
    this.form = new FormGroup({
      inputData: new FormControl('Paste it here...'),
      outputData: new FormControl('Response or errors will be displayed here...'),
    });
    this.form.get('inputData')?.valueChanges.subscribe((inputData: string) => {
      const output = this._handleInput(inputData);
      this.form.get('outputData')?.setValue(output);
    });
  }

  private _handleInput(inputData: string): string {
    try {
      const rawList = JSON.parse(inputData);
      return ZendeskHelper.generateList(rawList);
    } catch (error: any) {
      return error.message;
    }
  }
}
