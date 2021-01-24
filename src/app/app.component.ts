import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'faq-accordion-card';

  faqs = [
    {
      question: 'How many team members can I invite?',
      answer: 'Iusto accusata per et, ex idque iisque meliore usu. Mea iudico soleat fastidii eu.',
      selected: false
    },
    {
      question: 'What is the maximum file upload size?',
      answer: 'No more than 2GB. All files in your account must fit your allotted storage space.',
      selected: true
    },
    {
      question: 'How do I reset my password?',
      answer: 'Sea duis legendos partiendo in. Vix ne etiam nemore epicurei. Delenit dolorum repudiare est cu.',
      selected: false
    },
    {
      question: 'Can I cancel my subscription?',
      answer: 'Doctus delicata neglegentur ea per, sumo docendi ut vis, has ne regione definiebas.',
      selected: false
    },
    {
      question: 'Do you provide additional support?',
      answer: 'Quo no tibique detraxit posidonium, eu usu atomorum pericula.',
      selected: false
    }];

  onFaqIconClicked(faq: any): void {
    this.faqs.forEach((entry) => entry.selected = false);
    faq.selected = true;
  }
}
