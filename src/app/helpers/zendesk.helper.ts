interface IZendeskInputRow {
  ticket: {
    id: number;
    subject: string;
  };
  4950844815121: string;
}

interface IZendeskInput {
  rows: IZendeskInputRow[];
}

export class ZendeskHelper {
  private static _baseLink = 'https://padoa-group.zendesk.com/agent/tickets/';

  private static _mapName: { [key: string]: string } = {
    Aiman: '@Aiman Hmidouch',
    Eliane: '@Eliane Paelinck',
    Fabien: '@Fabien Sacrepeigne',
    Guillaume: '@Guimilt',
    Amélie: '@Amélie M',
    Gustavo: '@Gustavo Ch.R.',
    Jialiang: '@jialiang',
    Pierre: '@Pierre Moulonguet',
    Stéphane: '@Stéphane de Chatillon',
    Sébastien: '@Sébastien LEONCE',
    Yassine: '@Yassine',
    Akram: '@Akram SELMI',
  };

  public static generateList(input: IZendeskInput): string {
    const notAssigned = input.rows?.filter((row) => !ZendeskHelper._mapName[row[4950844815121]]) ?? [];
    const assigned = input.rows?.filter((row) => ZendeskHelper._mapName[row[4950844815121]]) ?? [];
    return [
      { rows: notAssigned, label: 'Sans affecter :empty_nest:' },
      { rows: assigned, label: 'Déjà affectés :homme_technologue:' }
    ].map((group) => ZendeskHelper._writeGroupLine(group.rows, group.label)).join('');
  }

  private static _writeGroupLine(group: IZendeskInputRow[], title: string): string {
    return `${group.length ? `> ${title}\n` : ''}${group.map((row: IZendeskInputRow) => ZendeskHelper._writeLine(row)).join('')}\n`
  }

  private static _writeLine(row: IZendeskInputRow): string {
    const owner = ZendeskHelper._mapName[row[4950844815121]] ?? '';
    return `- ${row.ticket.subject} ${owner}\n  ${ZendeskHelper._baseLink}${row.ticket.id}\n`;
  }
}
