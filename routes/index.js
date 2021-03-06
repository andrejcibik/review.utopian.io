var express = require('express');
var router = express.Router();

let questionnaire = [
  [{
      question: 'Were all relevant aspects or metrics related to the objective analyzed?',
      answers: [
        'Select your option',
        'All relevant metrics were covered.',
        'Only selected metrics were chosen; including more may have provided additional insights.',
        'Only a single or narrow aspect was chosen.',
        'No metric was chosen.'
      ]
    },
    {
      question: 'How would you rate the complexity data extraction for this analysis?',
      answers: [
        'Select your option',
        'Gathering the data required complex queries and post-processing.',
        'The method of extracting data was moderately challenging.',
        'The data can be directly imported for visualization - no additional data transformation was needed.',
        'No data was extracted.'
      ]
    },
    {
      question: 'How would you rate the quality of the visualization of the findings?',
      answers: [
        'Select your option',
        'Visualizations presented were superb and beyond expectation.',
        'Appropriate and sufficient visualization were used to present the results.',
        'Visualizations were included, but lacked in quality and/or quantity.',
        'Visualizations included were irrelevant to the objective.'
      ]
    },
    {
      question: 'Was the analysis reproducible through the use of the contribution content?',
      answers: [
        'Select your option',
        'All queries or data gathering methods and all data processing scripts were included.',
        'The core query or data gathering method was included and the data processing steps were described.',
        'Data gathering methods and processing steps were sketched.',
        'Data gathering methods were not included.'
      ]
    },
    {
      question: 'Was it a new and unique analysis?',
      answers: [
        'Select your option',
        'Yes, it was a unique analysis.',
        'It’s similar to another contribution, but covers deeper or additional aspects.',
        'It’s similar to another contribution, but covers a different time period.',
        'It’s a recurring analysis covering too short a time frame (i.e., daily).'
      ]
    },
    {
      question: 'How would you describe the formatting, language and overall presentation of the post?',
      answers: [
        'Select your option',
        'The post is of very high quality.',
        'The post is of decent quality, but not spectacular in any way.',
        'The post is poorly written and/or formatted, but readable.',
        'The post is really hard to read and the content is barely understandable'
      ]
    },
    {
      question: 'How would you rate the overall value of this contribution on the open source community and ecosystem?',
      answers: [
        'Select your option',
        'This contribution brings great and impactful value, and can be used for applications outside the specific project.',
        'This contribution adds significant value to the open source community and ecosystem, or is of critical importance to the specific project.',
        'This contribution adds some value to the open source community and ecosystem or is only valuable to the specific project.',
        'This contribution adds nearly no value to the open source community and ecosystem or the specific project.'
      ]
    }
  ],
  [{
      question: 'How would you describe the formatting, language and overall presentation of the post?',
      answers: [
        'Select your option',
        'The post is of very high quality.',
        'The post is of decent quality, but not spectacular in any way.',
        'The post is poorly written and/or formatted, but readable.',
        'The post is really hard to read and the content is barely understandable'
      ]
    },
    {
      question: 'How would you rate the overall value of this contribution on the open source community and ecosystem?',
      answers: [
        'Select your option',
        'This contribution brings great and impactful value, and can be used for applications outside the specific project.',
        'This contribution adds significant value to the open source community and ecosystem, or is of critical importance to the specific project.',
        'This contribution adds some value to the open source community and ecosystem or is only valuable to the specific project.',
        'This contribution adds nearly no value to the open source community and ecosystem or the specific project.'
      ]
    },
    {
      question: 'What is the overall volume of the blog post?',
      answers: [
        'Select your option',
        'More than 1,300 words',
        '800-1,300 words',
        '500-800 words',
        'Less than 500 words'
      ]
    },
    {
      question: 'What is the topic category of this blog post?',
      answers: [
        'Select your option',
        'Project introduction',
        'Project promotion',
        'Development log / release notes',
        'Project generic news'
      ]
    },
    {
      question: 'Is the post a part of a series?',
      answers: [
        'Select your option',
        'It is clear that it is a part of an ongoing series of posts.',
        'It is clear that it is the first post of an upcoming series.',
        'It is the first post from the author.',
        'The post is not a part of any series.'
      ]
    },
    {
      question: 'Was relevant quality graphic and video content included in this post?',
      answers: [
        'Select your option',
        'Yes, at least 4 distinguishable instances of graphic or video content were included.',
        'Yes, between 2 and 3 distinguishable instances of graphic or video content were included.',
        'A single instance of graphic or video content was included.',
        'No graphic or video content was included or the content was irrelevant.'
      ]
    },
    {
      question: 'How familiar is the author with the project discussed in the post?',
      answers: [
        'Select your option',
        'It is clear that they are closely familiar with the project and its details.',
        'The author offers some valuable insights about the project.',
        'Most of the blog post contains information gathered from other sources.',
        'The author knows only little or nothing about the project.'
      ]
    },
    {
      question: 'What is the timeframe of the events and announcements discussed in the blog post, and does it include reference to similar projects?',
      answers: [
        'Select your option',
        'Both recent and future events, as well as comparison with similar projects is included.',
        'Events more recent than 2 weeks, or future events related the project are included.',
        'Comparison with similar projects is included.',
        'None of these topics are discussed in the post.'
      ]
    }
  ],
  [{
      question: 'What is the volume of the work submitted?',
      answers: [
        'Select your option',
        'Long (at least 1,000 words in total)',
        'Medium (at least 400 words in total)',
        'Short (at least 200 words in total)',
        'Very Short (less than 200 words in total)'
      ]
    },
    {
      question: 'How would you rate the grammar and style of the content?',
      answers: [
        'Select your option',
        'Polished and well-written',
        'Good, but has room for improvement',
        'Has a few errors that need to be corrected',
        'It’s quite bad'
      ]
    },
    {
      question: `How relevant is the content to the project's needs?`,
      answers: [
        'Select your option',
        'Highly relevant and valuable',
        'Relevant but offers little unique value',
        'Somewhat relevant',
        'Does not adequately meet the project’s needs'
      ]
    },
    {
      question: 'Overall, how readable or comprehensible is the content?',
      answers: [
        'Select your option',
        'It reads well and is easy to understand',
        'It is understandable, but it could be improved',
        'Some parts are hard to understand',
        'A lot of it is hard to understand'
      ]
    },
    {
      question: 'Did the content fulfill the specific needs presented by the project owner?',
      answers: [
        'Select your option',
        'Yes, the content exceeded all specified requirements.',
        'Yes, all the requirements were fulfilled.',
        'Some of the less important requirements were left out',
        'Not all important requirements were addressed'
      ]
    },
    {
      question: 'How would you describe the formatting, language and overall presentation of the post?',
      answers: [
        'Select your option',
        'The post is of very high quality.',
        'The post is of decent quality, but not spectacular in any way.',
        'The post is poorly written and/or formatted, but readable.',
        'The post is really hard to read and the content is barely understandable'
      ]
    },
    {
      question: 'How would you rate the overall value of this contribution on the open source community and ecosystem?',
      answers: [
        'Select your option',
        'This contribution brings great and impactful value, and can be used for applications outside the specific project.',
        'This contribution adds significant value to the open source community and ecosystem, or is of critical importance to the specific project.',
        'This contribution adds some value to the open source community and ecosystem or is only valuable to the specific project.',
        'This contribution adds nearly no value to the open source community and ecosystem or the specific project.'
      ]
    }
  ],
  [{
      question: 'How would you describe the formatting, language and overall presentation of the post?',
      answers: [
        'Select your option',
        'The post is of very high quality.',
        'The post is of decent quality, but not spectacular in any way.',
        'The post is poorly written and/or formatted, but readable.',
        'The post is really hard to read and the content is barely understandable.'
      ]
    },
    {
      question: 'How would you rate the impact and significance of the contribution to the project and/or open source ecosystem in terms of uniqueness, usefulness and potential future applications?',
      answers: [
        'Select your option',
        'This contribution adds high value and holds great significance for the project and/or open source ecosystem.',
        'This contribution adds significant value to the project and/or open source ecosystem.',
        'This contribution adds some value to the project and/or open source ecosystem.',
        'This contribution holds close to no value and is insignificant in impact.'
      ]
    },
    {
      question: 'How would you rate the total volume of work invested into this contribution?',
      answers: [
        'Select your option',
        'This contribution appears to have demanded a lot of intensive work.',
        'This contribution appears to have required an average volume of work.',
        'This contribution shows some work done.',
        'This contribution shows close to no work done.'
      ]
    },
    {
      question: 'How would you rate the quality of the code submitted?',
      answers: [
        'Select your option',
        'High - it follows all best practices.',
        'Average - it follows most best practices.',
        'Low - it follows some best practices.',
        `Very low - it doesn't follow nearly any best practices.`
      ]
    },
    {
      question: 'How would you rate the knowledge and expertise necessary to fix the bug / implement the added feature(s)?',
      answers: [
        'Select your option',
        'High - a lot of research and specific knowledge was required.',
        'Average - some research and knowledge was required.',
        'Low - not much knowledge or skill were required.',
        'Insignificant - only basic knowledge or skills were necessary.'
      ]
    },
    {
      question: 'How would you rate the accuracy and readability of the commit messages?',
      answers: [
        'Select your option',
        'High - they are concise, descriptive and consistent.',
        'Average - they are mostly concise, descriptive and consistent.',
        'Low - they could be more concise, descriptive or consistent.',
        `Very low - they aren't concise, descriptive or consistent at all.`
      ]
    },
    {
      question: 'How do you rate the quality of the comments in the code?',
      answers: [
        'Select your option',
        'High - everything is well-commented and adds to the readability of the code.',
        'Average - most of the code is commented and most if it adds to the readability of the code.',
        'Low - little of the code is commented, but it still adds to the readability.',
        'Very low - the added comments provide no value or are not present at all.'
      ]
    }
  ],
  [{
      question: 'How would you rate the overall quality of the documentation?',
      answers: [
        'Select your option',
        'Fantastic quality! It’s very hard to find documentation this good.',
        'Very high quality.',
        'Average quality - could be improved in many ways.',
        'Very low quality.'
      ]
    },
    {
      question: 'How comprehensive was the documentation (how many features were documented, contribution volume, etc.)?',
      answers: [
        'Select your option',
        'A significant portion of the project was documented.',
        'Numerous features or one major feature were documented.',
        'A small feature was documented in detail.',
        'The documentation was severely lacking.'
      ]
    },
    {
      question: 'How would you rate the overall significance of this particular feature/file documentation to the project?',
      answers: [
        'Select your option',
        'Very important, the project is significantly easier to use with it.',
        'Important, but not critical to use or application of the project.',
        'It has some potential uses as reference.',
        'It’s nearly useless.'
      ]
    },
    {
      question: 'Is the documentation developed for the internal staff only, or does it add value to the open source community as a whole?',
      answers: [
        'Select your option',
        'It is meant to be used also by open source community members not associated with the project.',
        'It is mainly aimed at open source community members that contribute to this particular project.',
        'It is intended for internal staff use, but the community can also benefit from this content.',
        'It is clearly meant only for the internal staff of the project and hold no value to the open source community.'
      ]
    },
    {
      question: 'Does the author of the documentation understand the project and its needs in detail?',
      answers: [
        'Select your option',
        'Yes. The author is clearly very involved in the project.',
        'The author has good understanding of the project and its needs.',
        'The author clearly understands how the project works.',
        'The author has no understanding of the project.'
      ]
    },
    {
      question: 'How would you describe the formatting, language and overall presentation of the post?',
      answers: [
        'Select your option',
        'The post is of very high quality.',
        'The post is of decent quality, but not spectacular in any way.',
        'The post is poorly written and/or formatted, but readable.',
        'The post is really hard to read and the content is barely understandable'
      ]
    },
    {
      question: 'How would you rate the overall value of this contribution on the open source community and ecosystem?',
      answers: [
        'Select your option',
        'This contribution brings great and impactful value, and can be used for applications outside the specific project.',
        'This contribution adds significant value to the open source community and ecosystem, or is of critical importance to the specific project.',
        'This contribution adds some value to the open source community and ecosystem or is only valuable to the specific project.',
        'This contribution adds nearly no value to the open source community and ecosystem or the specific project.'
      ]
    }
  ],
  [{
      question: 'What was the severity level of the bug?',
      answers: [
        'Select your option',
        'Critical',
        'Major',
        'Minor',
        'Trival'
      ]
    },
    {
      question: 'Were the steps to reproduce the bug easy to understand and follow?',
      answers: [
        'Select your option',
        'Yes, the steps were clearly understandable and easy to follow.',
        'The steps were easy to follow, but were not described with sufficient clarity..',
        'The description of the steps severely lacked in clarity, but it is possible to reproduce.',
        'The steps are badly explained and nearly impossible to follow.'
      ]
    },
    {
      question: 'Was the bug a technical issue or a user experience (US) issue?',
      answers: [
        'Select your option',
        'It was largely technical but also had significant impact on the user experience.',
        'It was purely technical.',
        'It described a UX issue caused by a technical error.',
        'It described a UX issue alone.'
      ]
    },
    {
      question: 'How common and easy to discover was the bug reported?',
      answers: [
        'Select your option',
        'The bug was a very common occurrence and impacted the end user experience significantly, or it was a major security threat',
        'The bug was relatively common, but avoidable.',
        'The bug was very rare but impactful.',
        'The bug was nearly impossible to encounter without actively looking for it.'
      ]
    },
    {
      question: 'Has the contributor reported the issue to the project owner prior to submitting it to Utopian?',
      answers: [
        'Select your option',
        'Yes, it was reported by this contributor and acknowledged by the project owner.',
        'Yes, it was reported by this contributor but has to yet be acknowledged by the project owner.',
        'No, it was not reported, but an effort to contact the project owner has been made.',
        'No, it was not reported OR there is evidence the user contacted the project owner on behalf of Utopian without permission.'
      ]
    },
    {
      question: 'How would you describe the formatting, language and overall presentation of the post?',
      answers: [
        'Select your option',
        'The post is of very high quality.',
        'The post is of decent quality, but not spectacular in any way.',
        'The post is poorly written and/or formatted, but readable.',
        'The post is really hard to read and the content is barely understandable'
      ]
    },
    {
      question: 'How would you rate the overall value of this contribution on the open source community and ecosystem?',
      answers: [
        'Select your option',
        'This contribution brings great and impactful value, and can be used for applications outside the specific project.',
        'This contribution adds significant value to the open source community and ecosystem, or is of critical importance to the specific project.',
        'This contribution adds some value to the open source community and ecosystem or is only valuable to the specific project.',
        'This contribution adds nearly no value to the open source community and ecosystem or the specific project.'
      ]
    }
  ],
  [
    {
      question: 'How many distinctive designs were provided? E.g., if the project owner requires 3 designs, then it is counted as a single distinctive design.',
      answers: [
        'Select your option',
        'More than 3 distinctive, relatively complex designs were provided.',
        'Between 2 and 3; the designs were complex and took a fair amount of work.',
        'Only one distinctive design was provided or the provided designs are too similar.',
        'Fewer than the project owner requested and/or the work invested was absolutely minimal.'
      ]
    },
    {
      question: 'Is the whole contribution a result of own work?',
      answers: [
        'Select your option',
        'Yes.',
        'Some third party assets were used but all of them are usable for the contribution actual purpose. The assets were accordingly edited and not simply downloaded and used.',
        'Other assets were provided by the project owner.',
        'Most assets used were third party assets and contributor did not make additional effort to incorporate them in the contribution.'
      ]
    },
    {
      question: 'Did the contributor provide evidence of graphics consultation or other relevant kind of communication with the project owner?',
      answers: [
        'Select your option',
        'Yes. Communication was perfect.',
        'Yes, but communication was not professional or very detailed.',
        'No, but the contributor tried to reach out to the project owner.',
        'No, no communication happened OR there is evidence the user contacted the project owner on behalf of Utopian without permission.'
      ]
    },
    {
      question: 'Was the contribution used in the project? (ex.: the graphic design is already utilized in play store, project website or got merged into the official repository)',
      answers: [
        'Select your option',
        'Yes and the contributor provided clear evidence of it , and/or the project owner publicly announced that it will be used.',
        'It was not used, but the project owner liked it and considered using it.',
        'It was not used, but is of very high quality.',
        'It was not used as it provides no value to the project.'
      ]
    },
    {
      question: 'Does the contribution include files for immediate use in all requested formats?',
      answers: [
        'Select your option',
        'Yes, all required file formats were included.',
        'Most requested file formats requested by project owner were provided, but not all.',
        'No, submitted files were not ready for immediate use and require editing or adjustments.',
        'No files were provided.'
      ]
    },
    {
      question: 'Technical quality of graphics was:',
      answers: [
        'Select your option',
        'Excellent, no mistakes within the design.',
        'Very good with minor mistakes that are visible in the provided files.',
        'Good but the design has some more serious flaws that need to be corrected.',
        'Bad. The design does not follow graphics standard and is barely usable.'
      ]
    },
    {
      question: 'How would you describe the formatting, language and overall presentation of the post?',
      answers: [
        'Select your option',
        'The post is of very high quality.',
        'The post is of decent quality, but not spectacular in any way.',
        'The post is poorly written and/or formatted, but readable.',
        'The post is really hard to read and the content is barely understandable'
      ]
    },
    {
      question: 'How would you rate the overall value of this contribution on the open source community and ecosystem?',
      answers: [
        'Select your option',
        'This contribution brings great and impactful value, and can be used for applications outside the specific project.',
        'This contribution adds significant value to the open source community and ecosystem, or is of critical importance to the specific project.',
        'This contribution adds some value to the open source community and ecosystem or is only valuable to the specific project.',
        'This contribution adds nearly no value to the open source community and ecosystem or the specific project.'
      ]
    }
  ],
  [
    {
      question: 'Is the suggested feature commonly seen in other similar projects?',
      answers: [
        'Select your option',
        'No, it’s unique or very rare.',
        'Yes, but it’s a feature of high importance for this kind of project.',
        `It's common, but it will have some measurable positive impact on the user experience.`,
        'It’s extremely common and not majorly impactful.'
      ]
    },
    {
      question: 'Does this suggestion match the goals and/or roadmap of the project?',
      answers: [
        'Select your option',
        'Yes, it’s closely related to the main goals of the project.',
        'It is related, but does not match the main goal and purpose of the project.',
        'It is loosely related to one of the goals of the project.',
        'It is not related to the project goals at all.'
      ]
    },
    {
      question: 'Is the proposal realistic?',
      answers: [
        'Select your option',
        'Yes, it can definitely be achieved and is important enough to warrant the developers attention and time.',
        'Yes, it can definitely be achieved, but is not likely to get noticed by the development team immediately.',
        'It can be achieved theoretically, but no open source solutions to this problem have been suggested previously.',
        'No, it’s impossible to achieve.'
      ]
    },
    {
      question: 'What is the potential impact of the change proposed on the usability of the project?',
      answers: [
        'Select your option',
        'It will have a major positive impact on the project for both the project owner and end user.',
        'It will have a significant impact on the project for end users.',
        'It will change how users utilize the project by a minor margin.',
        'It will bring little to no change.'
      ]
    },
    {
      question: 'Has the contributor proposed a possible solution to implement the suggestion?',
      answers: [
        'Select your option',
        'Yes, the possible solution is described in great detail and makes a lot of sense',
        'Yes, but the possible solution was not described in sufficient detail.',
        'No, but the implementation is self explanatory.',
        'No, there’s no proposed solution though one is clearly necessary.'
      ]
    },
    {
      question: 'Is the suggestion original in nature, or were similar suggestions submitted to Utopian in the past?',
      answers: [
        'Select your option',
        'The suggestion is original and obviously unique.',
        'This kind of suggestion is fairly uncommon on Utopian.',
        'This is a common suggestion for other projects.',
        'The suggestion is clearly not well thought-out and holds no actual value.'
      ]
    },
    {
      question: 'Has the user provided any mockups (illustrations) of potential suggestion implementation appearance?',
      answers: [
        'Select your option',
        'Yes, and they’re of excellent quality.',
        'No, but the mockups are inapplicable for this suggestion.',
        'Yes, but the quality of the mockups is poor.',
        'No, there are no mockups included even though they are needed.'
      ]
    },
    {
      question: 'How would you describe the formatting, language and overall presentation of the post?',
      answers: [
        'Select your option',
        'The post is of very high quality.',
        'The post is of decent quality, but not spectacular in any way.',
        'The post is poorly written and/or formatted, but readable.',
        'The post is really hard to read and the content is barely understandable'
      ]
    },
    {
      question: 'How would you rate the overall value of this contribution on the open source community and ecosystem?',
      answers: [
        'Select your option',
        'This contribution brings great and impactful value, and can be used for applications outside the specific project.',
        'This contribution adds significant value to the open source community and ecosystem, or is of critical importance to the specific project.',
        'This contribution adds some value to the open source community and ecosystem or is only valuable to the specific project.',
        'This contribution adds nearly no value to the open source community and ecosystem or the specific project.'
      ]
    }
  ],
  [
    {
      question: 'How many substantial concepts does this tutorial address?',
      answers: [
        'Select your option',
        '4-5 substantial concepts covered in the tutorial',
        '2-3 substantial concepts covered in the tutorial',
        '1 substantial concept covered in the tutorial',
        'More than 5 substantial concepts covered in the tutorial'
      ]
    },
    {
      question: 'Does the title and the outline of the tutorial properly reflect the content?',
      answers: [
        'Select your option',
        'Yes, it is very clear.',
        'To some extent.',
        'The title is somewhat misleading and/or the outline is not detailed or informative enough.',
        'Title and outline are of little or no relevance to the content of the tutorial'
      ]
    },
    {
      question: 'Did the contributor provide supplementary resources, such as code and sample files in the contribution post or a linked GitHub repository?',
      answers: [
        'Select your option',
        'Yes, exceptional supplementary resources are provided including a relevant github repo/gist.',
        'Supplementary resources provided are of high relevance.',
        'Contributor provides minimal supplementary resources.',
        'No supplementary resources were provided.'
      ]
    },
    {
      question: 'Is the tutorial part of a series?',
      answers: [
        'Select your option',
        'Yes',
        'Yes, but it is the first entry in the series.',
        'No, but it works just fine as a stand-alone tutorial.',
        'No'
      ]
    },
    {
      question: 'Does the tutorial contain sufficient explanatory visuals?',
      answers: [
        'Select your option',
        'Yes, the visual components of the post were adequate in quality and quantity.',
        'The volume of visual components included was unnecessarily large.',
        'The post lacked sufficient visualization to easily learn from the content.',
        'No visualization was presented in this contribution.'
      ]
    },
    {
      question: 'How unique and/or innovative are the concepts covered in the tutorial?',
      answers: [
        'Select your option',
        'This was the first time I read about the concepts covered.',
        'The concepts covered were innovative and offer some usefulness.',
        'I have read several similar ideas and thoughts elsewhere, but this one was of higher quality.',
        'Such tutorials can be found online with great ease and the contribution add no value to the open source community.'
      ]
    },
    {
      question: 'How would you describe the formatting, language and overall presentation of the post?',
      answers: [
        'Select your option',
        'The post is of very high quality.',
        'The post is of decent quality, but not spectacular in any way.',
        'The post is poorly written and/or formatted, but readable.',
        'The post is really hard to read and the content is barely understandable'
      ]
    },
    {
      question: 'How would you rate the overall value of this contribution on the open source community and ecosystem?',
      answers: [
        'Select your option',
        'This contribution brings great and impactful value, and can be used for applications outside the specific project.',
        'This contribution adds significant value to the open source community and ecosystem, or is of critical importance to the specific project.',
        'This contribution adds some value to the open source community and ecosystem or is only valuable to the specific project.',
        'This contribution adds nearly no value to the open source community and ecosystem or the specific project.'
      ]
    }
  ],
  [
    {
      question: 'How many substantial concepts does this tutorial address?',
      answers: [
        'Select your option',
        '4-5 substantial concepts covered in the tutorial',
        '2-3 substantial concepts covered in the tutorial',
        '1 substantial concept covered in the tutorial',
        'More than 5 substantial concepts covered in the tutorial'
      ]
    },
    {
      question: 'Does the contribution text and images support the video tutorial?',
      answers: [
        'Select your option',
        'Exceptionally good text and, when applicable, images for concepts covered.',
        'Thorough text and, when applicable, images for concepts covered.',
        'Minimal text (at least 150 words) and images.',
        'No or very little text and images.'
      ]
    },
    {
      question: 'Is the video clearly prepared and structured?',
      answers: [
        'Select your option',
        'Both the presenter and the video are exceptionally organized, structured and presented.',
        'Presenter is prepared and video concepts are structured.',
        'Presenter has moments when he/she seems unprepared and/or the content seems to be unstructured.',
        'Presenter seems unprepared and/or video is unstructured.'
      ]
    },
    {
      question: 'Does the contributor provide supplementary resources, such as code and sample files in the contribution post or a GitHub repository?',
      answers: [
        'Select your option',
        'Contributor provided exceptional supplementary resources.',
        'Contributor provided good supplementary resources.',
        'Contributor provided minimal supplementary resources.',
        'No supplementary resources were provided.'
      ]
    },
    {
      question: 'How would you describe the sound quality of the video?',
      answers: [
        'Select your option',
        'Sound quality is excellent and sounds professionally produced.',
        'The sound is clear and understandable.',
        'Low quality of sound and/or mildly distracting background noise.',
        'Distracting background noise and/or very low quality recording.'
      ]
    },
    {
      question: 'Does the presenter speak clearly and is easy to understand?',
      answers: [
        'Select your option',
        'Yes, presenter’s speech is highly engaging and professional.',
        'Yes, presenter’s speech is easy to understand.',
        'Portions of the presenter’s speech were comprehensible.',
        'Little or none of the presenter’s speech was understandable.'
      ]
    },
    {
      question: 'Is the title of the tutorial and the concepts being covered visible on the video in text overlay form?',
      answers: [
        'Select your option',
        'Title and concepts covered are present in the video at all times in a non-disruptive way.',
        'Title and concepts covered appear temporarily when they are addressed.',
        'Only the title is presented and the concepts are not shown.',
        'Neither title nor concepts covered are presented in the video text overlay.'
      ]
    },
    {
      question: 'How would you describe the formatting, language and overall presentation of the post?',
      answers: [
        'Select your option',
        'The post is of very high quality.',
        'The post is of decent quality, but not spectacular in any way.',
        'The post is poorly written and/or formatted, but readable.',
        'The post is really hard to read and the content is barely understandable'
      ]
    },
    {
      question: 'How would you rate the overall value of this contribution on the open source community and ecosystem?',
      answers: [
        'Select your option',
        'This contribution brings great and impactful value, and can be used for applications outside the specific project.',
        'This contribution adds significant value to the open source community and ecosystem, or is of critical importance to the specific project.',
        'This contribution adds some value to the open source community and ecosystem or is only valuable to the specific project.',
        'This contribution adds nearly no value to the open source community and ecosystem or the specific project.'
      ]
    }
  ],
  [
    {
      question: 'Does the contribution adhere to the task request and reach the goals specified by the project owner?',
      answers: [
        'Select your option',
        'The results exceed the project owner’s request.',
        'The contribution met the project owner needs as detailed in the task request.',
        'The results did not meet the project owner needs, but provided some visibility to the project.',
        'The contribution did not meet the criteria set by the project owner and/or the task was badly defined by the project owner.'
      ]
    },
    {
      question: 'Does the post include sufficient information and detailed description of the work done?',
      answers: [
        'Select your option',
        'The post includes detailed reports including a downloadable activity report as well as bidding strategy, and detailed reasoning behind campaign planning and execution.',
        'The post includes some details on the campaign progress and results, but could offer additional information.',
        'The post lacks sufficient information to fully understand the work performed.',
        'The post includes no proof of authorship and/or lacks campaign result details completely'
      ]
    },
    {
      question: 'Is the audience targeting and segmentation relevant to the project promoted?',
      answers: [
        'Select your option',
        'Yes, the target audience is well defined and relevant to the project.',
        'The target audience is relevant, but too broad / narrow.',
        'The target audience is not relevant to the project promoted.',
        'No targeting information was provided.'
      ]
    },
    {
      question: 'Is the message used in the visibility campaign relevant and concise?',
      answers: [
        'Select your option',
        'Yes, the call to action is very clear and ad copy is accurate.',
        'The message is included, but could be better crafted.',
        'The message is inaccurate / unsuitable to the target audience.',
        'The message is completely irrelevant and / or in a foreign language with no translation provided.'
      ]
    },
    {
      question: 'How would you rate the overall effectiveness of the visibility efforts undertaken?',
      answers: [
        'Select your option',
        'The project received significant visibility (over 10,000 users reach) and conversion rate (over 2 percent on average).',
        'The project received some visibility and traction (under 10,000 reach, conversion rate of 0-2 percent).',
        'The project received little visibility and traction due to badly defined campaign goals by the project owner.',
        'The project did not benefit from this contribution.'
      ]
    },
    {
      question: 'Does the submission offer added-value / educational content (such as tips, insights, etc.)?',
      answers: [
        'Select your option',
        'Yes, people should learn from this post!',
        'Some added-value content is included.',
        'There’s very little one can learn from this post.',
        'This post includes misleading information.'
      ]
    },
    {
      question: 'How would you describe the formatting, language and overall presentation of the post?',
      answers: [
        'Select your option',
        'The post is of very high quality.',
        'The post is of decent quality, but not spectacular in any way.',
        'The post is poorly written and/or formatted, but readable.',
        'The post is really hard to read and the content is barely understandable'
      ]
    },
    {
      question: 'How would you rate the overall value of this contribution on the open source community and ecosystem?',
      answers: [
        'Select your option',
        'This contribution brings great and impactful value, and can be used for applications outside the specific project.',
        'This contribution adds significant value to the open source community and ecosystem, or is of critical importance to the specific project.',
        'This contribution adds some value to the open source community and ecosystem or is only valuable to the specific project.',
        'This contribution adds nearly no value to the open source community and ecosystem or the specific project.'
      ]
    }
  ],
  [
    {
      question: 'How would you describe the formatting, language and overall presentation of the post?',
      answers: [
        'Select your option',
        'The post is of very high quality.',
        'The post is of decent quality, but not spectacular in any way.',
        'The post is poorly written and/or formatted, but readable.',
        'The post is really hard to read and the content is barely understandable'
      ]
    },
    {
      question: 'How would you rate the overall value of this contribution on the open source community and ecosystem?',
      answers: [
        'Select your option',
        'This contribution brings great and impactful value, and can be used for applications outside the specific project.',
        'This contribution adds significant value to the open source community and ecosystem, or is of critical importance to the specific project.',
        'This contribution adds some value to the open source community and ecosystem or is only valuable to the specific project.',
        'This contribution adds nearly no value to the open source community and ecosystem or the specific project.'
      ]
    },
    {
      question: 'How feasible and executable is the task requested?',
      answers: [
        'Select your option',
        'Very. It is likely to receive multiple potential solutions.',
        'Moderate. It is likely to receive some potential solutions.',
        'Low. The solution will demand a great deal of work, but someone invested in the project could take on this.',
        'Impossible. It is very unlikely anyone will undertake this task.'
      ]
    },
    {
      question: 'How impactful will this task be for the specific project?',
      answers: [
        'Select your option',
        'Obviously crucial for ongoing project development.',
        'It will have a major impact on the development and/or end user experience.',
        'It hold some significance to ongoing project development.',
        'The solution to this task will have little to no impact on the project'
      ]
    },
    {
      question: 'How descriptive is the task request, and does it provide all necessary information to solve it?',
      answers: [
        'Select your option',
        'The task request is very descriptive and includes all the required information, as well as additional important data or tips.',
        'The task request is sufficiently descriptive and includes the information required to solve it.',
        'The task request includes some information, but it is partially inaccurate, lacking or insufficient to solve the task.',
        'The task request is confusing, lacking information and resources.'
      ]
    },
    {
      question: 'Is this task request similar to another submitted by the same project owner?',
      answers: [
        'Select your option',
        'No, this task request is unique and different from other tasks every posted by this project owner.',
        'Yes, but it was submitted over 30 days ago.',
        'Yes, but it is sufficiently unique and/or necessary for the project development.',
        'Yes, this task request is too similar or a direct copy of another task request submitted by this project owner in the past 30 days.'
      ]
    }
  ]
]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/result/:cat/:num', function (req, res, next) {
  let category = req.params.cat;
  let ans = req.params.num;

  if(category < 0 || category > 11)
    res.render('error')

  cat = questionnaire[category];
  let object= [];
  for (var i = 0; i < cat.length; i++) {
    obj = {};
    obj.question = cat[i].question;
    obj.answer = cat[i].answers[ans.charAt(i)]
    object.push(obj)
  }
  console.log(object);

  res.render('result', {object: object})
})

module.exports = router;
