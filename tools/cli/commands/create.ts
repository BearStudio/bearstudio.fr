import { Prompt } from '@effect/cli';
import { FileSystem, Path } from '@effect/platform';
import { Effect } from 'effect';

const slugify = (text: string): string =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const formatDate = (date: Date): string => {
  const y = date.getFullYear();
  const m = (date.getMonth() + 1).toString().padStart(2, '0');
  const d = date.getDate().toString().padStart(2, '0');
  return `${y}-${m}-${d}`;
};

const titlePrompt = Prompt.text({
  message: "Titre de l'article",
  validate: (value) =>
    value.trim().length === 0
      ? Effect.fail('Le titre ne peut pas être vide')
      : Effect.succeed(value.trim()),
});

const datePrompt = Prompt.date({
  message: 'Date de publication',
  dateMask: 'YYYY-MM-DD',
  initial: new Date(),
});

const localePrompt = Prompt.select({
  message: 'Langue',
  choices: [
    { title: 'Français', value: 'fr' as const },
    { title: 'English', value: 'en' as const },
  ],
});

export const createArticle = Effect.gen(function* () {
  const fs = yield* FileSystem.FileSystem;
  const path = yield* Path.Path;

  const { title, date, locale } = yield* Prompt.all({
    title: titlePrompt,
    date: datePrompt,
    locale: localePrompt,
  });

  const slug = slugify(title);
  const postsDir = path.resolve('src', 'content', 'posts', slug);
  const filePath = path.join(postsDir, `${locale}.md`);

  const frontmatter = [
    '---',
    `title: '${title.replace(/'/g, "''")}'`,
    `date: ${formatDate(date)}`,
    '---',
    '',
    '',
  ].join('\n');

  yield* fs.makeDirectory(postsDir, { recursive: true });
  yield* fs.writeFileString(filePath, frontmatter);

  yield* Effect.log(`Article créé : ${filePath}`);
});
