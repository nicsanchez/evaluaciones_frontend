import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { LogsService } from 'src/app/services/logs.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css'],
})
export class LogsComponent implements OnInit {
  displayedColumns: string[] = ['modulo', 'accion', 'usuario', 'created_at'];
  dataSource = [];
  itemsPerPage = 5;
  page = 0;
  total = 0;
  public loading: boolean = false;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    private logsService: LogsService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getLogs();
  }

  getLogs() {
    let data = {
      token: localStorage.getItem('token'),
      itemsPerPage: this.itemsPerPage,
    };
    this.loading = true;
    this.logsService.getLogs(data, this.page).subscribe(
      (response: any) => {
        this.loading = false;
        if (response.status == 200) {
          this.dataSource = response.data.data;
          this.total = response.data.total;
          if (this.total == 0) {
            this.toastrService.warning(
              'No se encontró registro de actividad.',
              'Advertencia'
            );
          }
        } else {
          this.toastrService.error(
            'No fue posible obtenerse el registro de actividad almacenado en el servidor',
            'Error'
          );
        }
      },
      () => {
        this.loading = false;
        this.toastrService.error(
          'Ocurrió un error al obtenerse el registro de actividad almacenado en el servidor',
          'Error'
        );
      }
    );
  }

  changePage(event: any) {
    this.page = event.pageIndex + 1;
    this.itemsPerPage = event.pageSize;
    this.getLogs();
  }
}
