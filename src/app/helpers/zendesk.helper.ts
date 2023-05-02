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
    Guillaume: '@Guillaume Miltin',
    Gustavo: '@Gustavo Chaiza Ramirez',
    Jianlang: '@Jialang',
    Maxence: '@Maxence Morillon',
    Maxime: '@Maxime Boinet',
    Pierre: '@Pierre Moulonguet',
    Stéphane: '@Stéphane de Chatillon',
    Yassine: '@Yassine',
    null: '',
  };

  public static generateList(input: IZendeskInput): string {
    return input.rows.map((row: IZendeskInputRow) =>
      `[${row.ticket.id}](${ZendeskHelper._baseLink}${row.ticket.id}) -> ${
        ZendeskHelper._mapName[row[4950844815121]]
      } -> ${row.ticket.subject}`).join('  \n');
  }
}
