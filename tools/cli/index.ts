import { Command, Options } from '@effect/cli';
import { NodeContext, NodeRuntime } from '@effect/platform-node';
import { Console, Effect, Match } from 'effect';

import { createArticle } from './commands/create.ts';

const createType = Options.choice('type', ['article', 'member']).pipe(
  Options.withDefault('article'),
  Options.withAlias('t')
);

const create = Command.make('create', { type: createType }, ({ type }) =>
  Match.value(type).pipe(
    Match.when('article', () => createArticle),
    Match.when('member', () => Console.log('memberrrrr')),
    Match.exhaustive
  )
);

const cli = Command.make('cli').pipe(Command.withSubcommands([create]));

const root = Command.run(cli, {
  name: 'cli',
  version: '1.0.0',
});

root(process.argv).pipe(Effect.provide(NodeContext.layer), NodeRuntime.runMain);
