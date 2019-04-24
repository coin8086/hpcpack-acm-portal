import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-node-group',
  templateUrl: './node-group.component.html',
  styleUrls: ['./node-group.component.scss']
})
export class NodeGroupComponent implements OnInit {
  public selectedGroups = [
    {
      name: 'HeadNodes',
      description: 'The head nodes in the cluster',
      defaultGroup: true
    },
    {
      name: 'ComputeNodes',
      description: 'The compute nodes in the cluster',
      defaultGroup: true
    },
    {
      name: 'LinuxNodes',
      description: 'The linux nodes in the cluster',
      defaultGroup: false
    },
    {
      name: 'AzureNodes',
      description: 'Microsoft Azure node instances available in the cluster',
      defaultGroup: false
    }
  ]
  public allGroups = [
    {
      name: 'HeadNodes',
      description: 'The head nodes in the cluster',
      defaultGroup: true
    },
    {
      name: 'ComputeNodes',
      description: 'The compute nodes in the cluster',
      defaultGroup: true
    },
    {
      name: 'LinuxNodes',
      description: 'The Linux nodes in the cluster',
      defaultGroup: false
    },
    {
      name: 'WindowsNodes',
      description: 'The Windows nodes in the cluster',
      defaultGroup: false
    },
    {
      name: 'AzureBatchServicePools',
      description: 'The Azure batch pools in the cluster',
      defaultGroup: false
    },
    {
      name: 'AzureLaasNodes',
      description: 'The Azure laas Nodes in the cluster',
      defaultGroup: false
    },
    {
      name: 'AzureNodes',
      description: 'Microsoft Azure node instances available in the cluster',
      defaultGroup: false
    },
    {
      name: 'UnmanagedServerNodes',
      description: 'Unmanaged server node instances avalibale in the cluster',
      defaultGroup: false
    },
    {
      name: 'WCFBrokerNodes',
      description: 'The broker nodes in the cluster',
      defaultGroup: false
    },
    {
      name: 'WorkstationNodes',
      description: 'The workstations in the cluster',
      defaultGroup: false
    }
  ];

  public dataSource: MatTableDataSource<any> = new MatTableDataSource();
  public isNewGroup: boolean = false;
  public newGroup = {
    name: '',
    description: '',
    defaultGroup: false
  };


  constructor(
    public dialogRef: MatDialogRef<NodeGroupComponent>
  ) { }

  ngOnInit() {
    this.dataSource.data = this.allGroups;
  }


  public isSelectedGroup(group) {
    let index = this.selectedGroups.findIndex(n => {
      return n.name == group.name;
    });
    return index == -1 ? false : true;
  }

  public updateSelectedGroups(group): void {
    let index = this.selectedGroups.findIndex(n => {
      return n.name == group.name;
    });
    if (index != -1) {
      this.selectedGroups.splice(index, 1);
    }
    else {
      this.selectedGroups.push(group);
    }
  }

  public createGroup() {
    this.isNewGroup = true;
  }

  public backToList() {
    this.isNewGroup = false;
  }

  public updateList(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  close(){
    let params = { isNewGroup: this.isNewGroup, newGroup: this.newGroup, selectedGroups: this.selectedGroups};
    this.dialogRef.close(params);
  }
}
