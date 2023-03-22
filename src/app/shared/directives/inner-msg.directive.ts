import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { NgControl } from '@angular/forms';

type MsgType = {
  [prop: string]: string;
};

const CLASS_NAME_MSG = 'inner-msg-error';

@Directive({
  selector: '[innerMsg]',
})
export class InnerMsgDirective implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();

  @Input()
  innerMsg!: MsgType;

  @Input()
  singleKey = true;

  constructor(private el: ElementRef, private ngControl: NgControl) {

  }
  ngOnDestroy(): void {
    const me = this;
    me.destroy$.next();
    me.destroy$.complete();
  }
  ngOnInit(): void {
    const me = this;
    if (!me.ngControl) {
      throw new Error(`Not found NgControl`);
    }
    me.ngControl.valueChanges?.pipe(takeUntil(me.destroy$)).subscribe(
      _ => {
        me.detectRenderMsg();
      }
    );
    (me.el.nativeElement as HTMLElement).addEventListener('blur', () => {
      me.detectRenderMsg();
    });
  }

  private detectRenderMsg() {
    const me = this;
    const existInnerMsg = (me.el.nativeElement as HTMLElement).parentElement?.querySelector(`.${CLASS_NAME_MSG}`);
    if (existInnerMsg) {
      me.removeInnerMsg();
    }
    if (me.ngControl.invalid && (me.ngControl.dirty || me.ngControl.touched)) {
      if (!!me.ngControl.errors) {
        const keys = Object.keys(me.ngControl.errors);
        if (keys.length === 0) {
          return;
        }
        // get msg
        if (me.singleKey) {
          const msg = me.innerMsg[keys[0]] ?? keys[0];
          me.createElementByMsg(msg);
        } else {
          const arrMsg = keys.reduce((res: string[], key: string) => {
            res.push(me.innerMsg[key] ?? key);
            return res;
          }, []);
          me.createElementByArrayMsg(arrMsg);
        }
      }
    } else {
      me.removeInnerMsg();
    }
  }

  private createElementByMsg(msg: string) {
    const div = document.createElement('div');
    div.classList.add(CLASS_NAME_MSG);
    div.innerHTML = `
    <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="red" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
    </svg>
      <span style='color: red'>${msg}</span>
    `;
    const me = this;
    (me.el.nativeElement as HTMLElement).parentElement?.appendChild(div);
  }

  private createElementByArrayMsg(arrMsg: string[]) {
    const div = document.createElement('div');
    div.classList.add(CLASS_NAME_MSG);
    let newArrMsg = arrMsg || [];
    newArrMsg = newArrMsg.map(msg => {
      return `<span>${msg}</span>`;
    });
    const msgInner = newArrMsg.join('<br/>');
    div.innerHTML = `
    <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="red" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
  </svg>
      ${msgInner}
    `;
    const me = this;
    (me.el.nativeElement as HTMLElement).parentElement?.appendChild(div);
  }

  private removeInnerMsg() {
    const me = this;
    const parent = (me.el.nativeElement as HTMLElement).parentElement;
    const elMsg = parent?.getElementsByClassName(CLASS_NAME_MSG);
    if (elMsg && elMsg.length > 0) {
      parent?.removeChild(elMsg.item(0) as Element);
    }
  }

}