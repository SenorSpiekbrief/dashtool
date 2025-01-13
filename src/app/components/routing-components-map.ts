import { DashboardOverviewComponent } from "./dashboard-overview/dashboard-overview.component";
import { ExportComponent } from "./export/export.component";
import { ImportComponent } from "./import/import.component";
import { NewDashboardComponent } from "./new-dashboard/new-dashboard.component";
import { NewReportComponent } from "./new-report/new-report.component";
import { ReportOverviewComponent } from "./report-overview/report-overview.component";
import { Type } from '@angular/core';

export type ComponentMap = { [key: string]: Type<any> };

export const ROUTING_COMPONENTS: ComponentMap = {
  "NewDashboardComponent": NewDashboardComponent,
  "NewReportComponent": NewReportComponent,
  "DashboardOverviewComponent": DashboardOverviewComponent,
  "ReportOverviewComponent":ReportOverviewComponent,
  "ImportComponent":ImportComponent,
  "ExportComponent":ExportComponent,
};
