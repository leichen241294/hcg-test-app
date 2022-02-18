import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { faBars, faXmark, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { LIST_DEFAULT_LIMIT } from 'src/app/constanst/common';
import { GenerationsService } from 'src/app/services/generations/generations.service';
import { VersionService } from 'src/app/services/version/version.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isCollapsedMenu = {
    generations: true,
    version: true
  };
  faIcons = {
    faBars,
    faXmark,
    faChevronDown
  }
  subSidebar = false;
  listGenerations: any;
  listGames: any;
  @Input() isOpenSidebar!: boolean;
  @Output() isCloseSidebar = new EventEmitter<boolean>();

  constructor(
    private generationsService: GenerationsService,
    private versionService: VersionService
  ) { }

  ngOnInit(): void {
    this.getListGenerations();
    this.getListGames();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["isOpenSidebar"].currentValue !== this.subSidebar) {
      this.subSidebar = changes["isOpenSidebar"].currentValue
    }
  }

  toggle() {
    this.subSidebar = !this.subSidebar;
    this.isCloseSidebar.emit(false);
  }

  collapseToggle(collapse: any, event: any) {
    event.stopPropagation();
    collapse.toggle();
    event.currentTarget.children[1].children[0].classList.toggle('rotate-collapsed');
  }

  getListGenerations() {
    this.generationsService.getListGenerations().subscribe((res: any) => {
      this.listGenerations = res.results;
      this.listGenerations = this.listGenerations.map((generation: any) => {
        const nameArr = generation.name.split('-');
        const title = nameArr[0].charAt(0).toUpperCase() + nameArr[0].slice(1).toLowerCase();
        const number = nameArr[1].toUpperCase();

        return Object.assign({}, generation, { name: `${title} ${number}` })
      })
    })
  }

  getListGames() {
    this.versionService.getListVersion(LIST_DEFAULT_LIMIT.version).subscribe((res: any) => {
      this.listGames = res.results;
      this.listGames = this.listGames.map((version: any) => {
        let nameArr = version.name.split('-');
        nameArr = nameArr.map((e: any) => {
          return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
        })

        return Object.assign({}, version, { name: nameArr.join(' ') });
      })
    })
  }
}
