import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EvaluationRoutes } from './evaluation.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UploadComponent } from './modals/upload/upload.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { MatTableModule } from '@angular/material/table';
import { DownloadComponent } from './modals/download/download.component';
import { ErrorsComponent } from './modals/download/errors/errors.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { UploadErrorsComponent } from './modals/upload/errors/errors.component';
import { UpdateEmailsComponent } from './modals/updateEmails/updateEmails.component';
import { EmailsErrorsComponent } from './modals/updateEmails/errors/errors.component';
import { sendMassiveEmailsComponent } from './modals/sendMassiveEmails/sendMassiveEmails.component';
import { MassiveEmailsErrorsComponent } from './modals/sendMassiveEmails/errors/errors.component';

@NgModule({
  declarations: [
    EvaluationComponent,
    UploadComponent,
    DownloadComponent,
    ErrorsComponent,
    UploadErrorsComponent,
    UpdateEmailsComponent,
    EmailsErrorsComponent,
    sendMassiveEmailsComponent,
    MassiveEmailsErrorsComponent,
  ],
  imports: [
    RouterModule.forChild(EvaluationRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    NgxMatFileInputModule,
    MatTableModule,
    ComponentsModule,
  ],
  exports: [EvaluationComponent],
})
export class EvaluationsModule {}
