$(document).ready(() => {
  const $board = $('#board')
  const $lists = $board.children('.js-list')

  $lists.each(function() {
    const $list = $(this)
    const $copyButton = $(
      '<a href="#" class="list-header-extras-menu dark-hover js-trellenium-copy-list">' +
        '<span class="icon-sm icon-share"></span>' +
      '</a>'
    )

    $copyButton.insertBefore($list.find('.js-open-list-menu'))

    const clipboard = new ClipboardJS($copyButton.get(0), {
      text: function(trigger) {
        let markdownArray = []
        const $cards = $list.find('.list-card')
        $cards.each(function() {
          const $card = $(this)
          const $cardNameClone = $card.find('.js-card-name').clone()
          $cardNameClone.find('.card-short-id').remove()

          const cardUrl = 'https://trello.com' + $card.attr('href')
          const cardName = $cardNameClone.text()

          markdownArray.push(
            '- [' + cardName + '](' + cardUrl + ')'
          )
        })

        return markdownArray.join('\n')
      }
    })

  })
})
