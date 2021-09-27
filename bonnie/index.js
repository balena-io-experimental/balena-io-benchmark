const csv = require('csv-parser');
const fs = require('fs');

const BENCHMARK_PATH = `../results/results.csv`;
const RESULTS_PATH = `../results/results.json`
const HEADERS = [
    'format_version',
    'bonnie_version',
    'name',
    'concurrency',
    'seed',
    'file_size',
    '',
    'chunk_size',
    '',
    'seq_out_chr',
    'seq_out_chr_cpu',
    'seq_out_block',
    'seq_out_block_cpu',
    'rewrite',
    'rewrite_cpu',
    'seq_in_chr',
    'seq_in_chr_cpu',
    'seq_in_block',
    'seq_in_block_cpu',
    'seeks',
    'seeks_cpu',
    'num_files',
    '',
    '',
    '',
    '',
    'seq_create_create',
    'seq_create_create_cpu',
    'seq_create_read',
    'seq_create_read_cpu',
    'seq_create_delete',
    'seq_create_delete_cpu',
    'random_create_create',
    'random_create_create_cpu',
    'random_create_read',
    'random_create_read_cpu',
    'random_create_delete',
    'random_create_delete_cpu',
    'seq_in_chr_latency',
    'seq_in_block_latency',
    'rewrite_latency',
    'seq_out_chr_latency',
    'seq_out_block_latency',
    'seeks_latency',
    'seq_create_create_latency',
    'seq_create_read_latency',
    'seq_create_delete_latency',
    'rand_create_create_latency',
    'rand_create_read_latency',
    'rand_create_delete_latency'
]


function main(){
    const resultsJson = {
        results: []
    };
    fs.createReadStream(BENCHMARK_PATH)
    .pipe(csv(HEADERS))
    .on('data', (data) => {
        console.log(data)
        resultsJson.results.push(data)
    })
    .on('end', () => {
        console.log(resultsJson);
        let output = JSON.stringify(resultsJson);
        fs.writeFileSync(RESULTS_PATH, output);
    });
}

main();