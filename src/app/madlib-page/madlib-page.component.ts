import { Component, OnInit } from "@angular/core"
import { MadlibTemplate } from "../interfaces/madlib-template.interface"

@Component({
  selector: "app-madlib-page",
  templateUrl: "./madlib-page.component.html",
  styleUrls: ["./madlib-page.component.css"],
})
export class MadlibPageComponent implements OnInit {
  words: string[] = []
  story: string = ""

  madlibTemplate: MadlibTemplate = {
    blanks: [
      "foreign country",
      "adverb",
      "adjective",
      "animal",
      "verb ending in 'ing'",
      "verb",
      "verb ending in 'ing'",
      "adverb",
      "adjective",
      "a place",
      "type of liquid",
      "part of the body",
      "verb",
    ],
    value: [
      "If you are traveling in ",
      " and find yourself having to cross a piranha-filled river, here's how to do it ",
      ": \n* Piranhas are more ",
      " during the day, so cross the river at night.\n* Avoid areas with netted ",
      " traps--piranhas may be ",
      " there looking to ",
      " them!\n* When ",
      " the river, swim ",
      ". You don't want to wake them up and make them ",
      "!\n* Whatever you do, if you have an open wound, try to find another way to get back to the ",
      ". Piranhas are attracted to fresh ",
      " and will most likely take a bite out of your ",
      " if you ",
      " in the water!",
      0,
    ],
    title: "How To Cross a Piranha-Infested River",
  }

  constructor() {}

  ngOnInit() {}

  onSubmit(madlibForm) {
    console.log("form", madlibForm)
    console.log("test invalid", madlibForm.form.controls["word" + 0].invalid)

    this.madlibTemplate.value.forEach((fragment, index) => {
      var word = madlibForm.value["word" + index]
      if (fragment == 0) {
        return
      } else if (word) {
        this.story += fragment + word
      } else {
        this.story += fragment
      }
    })
    console.log("story", this.story)
  }
}
