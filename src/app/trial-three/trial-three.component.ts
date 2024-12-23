import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-trial-three',
  imports: [],
  templateUrl: './trial-three.component.html',
  styleUrl: './trial-three.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrialThreeComponent {
  protected items = [{ value: 0 }, { value: 0 }];
// test mid term
  readonly totalValue = input<number>();
  readonly totalValueChange = output<number>();

  protected onChange(index: number, value: number): void {
    this.items[index].value = value;
    console.info(this.items);
    }

    protected add(): void {
      this.items.push({ value: 0 });
      console.info(this.items);
      }

    protected remove(index: number): void {
    this.items.splice(index, 1);
    console.info(this.items);
    }

    protected changeColor(elem: HTMLElement): void {
    elem.style.backgroundColor = 'yellow';
    }
    protected getResult(): string {
      return this.items.map((item) => item.value).join(', ');
      }

}
